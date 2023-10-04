import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Form } from '../Models/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  res :any;
  tableNames: any =[];
  searchResultForm: Form[] =[];
  
  // getUrls
  getTableNamesUrl='https://localhost:7106/api/Table/tableNames';
  getTableByIdUrl ='https://localhost:7106/api/Table/table/'
  getFormsByNameUrl = 'https://localhost:7106/api/Form/FormName:';
  getFormsByNumberUrl = 'https://localhost:7106/api/Form/FormNumber:';
  getAllFormsrUrl = 'https://localhost:7106/api/Form/FormsAll';
  getFormByIdUrl= 'https://localhost:7106/api/Form/formId:'

  // posturls
  addFormUrl = 'https://localhost:7106/api/Form/Form'

  //updateurls
  editPatchUrl = 'https://localhost:7106/api/Form/FormId:'

  //deleteUrls
  deleteFormUrl = 'https://localhost:7106/api/Form/FormNumber:';

  constructor(private http:HttpClient) { }

  getTableNames(){
    return this.http.get(this.getTableNamesUrl);
  }
  getTableById(id:string):Observable<any>{
    return this.http.get(this.getTableByIdUrl + id)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            // Handle the 404 error here, for example:
            console.error('Table not found:', error);
            return throwError('NoFormsFound');
          } else {
            // Handle other errors here
            console.error('An error occurred:', error);
            return throwError('An error occurred:'+error);
          }
        })
      );
  }
  
  getAllForms(): Observable<any> {
    return this.http.get(this.getAllFormsrUrl)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            // Handle the 404 error here, for example:
            console.error('No Forms found:', error);
            return throwError('NoFormsFound');
          } else {
            // Handle other errors here
            console.error('An error occurred:', error);
            return throwError('An error occurred:'+error);
          }
        })
      );
  }
  getFormById(id:string):Observable<any>{
    return this.http.get(this.getFormByIdUrl + id)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            // Handle the 404 error here, for example:
            console.error('Forms not found:', error);
            return throwError('NoFormsFound');
          } else {
            // Handle other errors here
            console.error('An error occurred:', error);
            return throwError('An error occurred:'+error);
          }
        })
      );
  }
  getFormsByName(name: string): Observable<any> {
    return this.http.get(this.getFormsByNameUrl + name)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            // Handle the 404 error here, for example:
            console.error('Forms not found:', error);
            return throwError('NoFormsFound');
          } else {
            // Handle other errors here
            console.error('An error occurred:', error);
            return throwError('An error occurred:'+error);
          }
        })
      );
  }
  getFormsByNumber(number: string): Observable<any> {
    return this.http.get(this.getFormsByNumberUrl + number)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            // Handle the 404 error here, for example:
            console.error('Forms not found:', error);
            return throwError('NoFormsFound');
          } else {
            // Handle other errors here
            console.error('An error occurred:', error);
            return throwError('An error occurred:'+error);
          }
        })
      );
  }
  createForm(form : Form): Observable<any> {
    return this.http.post(this.addFormUrl,form)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          // Handle the 404 error here, for example:
          console.error('Form Not Found', error);
          return throwError('NoFormsFound');
        } else {
          // Handle other errors here
          console.error('An error occurred:', error);
          return throwError('An error occurred:'+error);
        }
      })
    );
  }
  updateForm(id:string, newForm:Form):Observable<any>{
    return this.http.patch(this.editPatchUrl+newForm.id,newForm)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          // Handle the 404 error here, for example:
          console.error('Form Not found:', error);
          return throwError('FormNotFound'+error);
        } else {
          // Handle other errors here
          console.error('An error occurred:', error);
          return throwError('An error occurred:'+error);
        }
      })
    );
  }
  deleteForm(id:string):Observable<any>{
    return this.http.delete(this.deleteFormUrl+id)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          // Handle the 404 error here, for example:
          console.error('Form Not found:', error);
          return throwError('FormNotFound'+error);
        } else {
          // Handle other errors here
          console.error('An error occurred:', error);
          return throwError('An error occurred:'+error);
        }
      })
    );
  }
  loadTableNames(){
    this.getTableNames().subscribe({
      next:(res)=>{
        this.tableNames=res
        console.log(this.tableNames);
      },
      error: (err) => {
        alert("Error in fetching Table Names:"+err)
      }
  } 
    );
  }
}

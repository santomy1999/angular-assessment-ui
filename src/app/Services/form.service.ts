import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Form } from '../Models/form';
import { Urls } from './environment/url.environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  res :any;
  tableNames: any =[];
  searchResultForm: Form[] =[];
  
  // // getUrls
  // getTableNamesUrl='https://localhost:7106/api/Table/tableNames';
  // getTableByIdUrl ='https://localhost:7106/api/Table/table/'
  // getFormsByNameUrl = 'https://localhost:7106/api/Form/FormName:';
  // getFormsByNumberUrl = 'https://localhost:7106/api/Form/FormNumber:';
  // getAllFormsrUrl = 'https://localhost:7106/api/Form/FormsAll';
  // getFormByIdUrl= 'https://localhost:7106/api/Form/formId:'

  // // posturls
  // addFormUrl = 'https://localhost:7106/api/Form/Form'

  // //updateurls
  // editPatchUrl = 'https://localhost:7106/api/Form/Form'

  // //deleteUrls
  // deleteFormUrl = 'https://localhost:7106/api/Form/FormNumber:';

  constructor(private http:HttpClient,private urls: Urls) { }

  getTableNames(){
    return this.http.get(this.urls.getTableNamesUrl);
  }
  getTableById(id:string):Observable<any>{
    return this.http.get(this.urls.getTableByIdUrl + id)
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
  
  getAllForms(pageNumber:number = 1, pageSize:number=15): Observable<any> {
    return this.http.get(this.urls.getAllFormsrUrl+"?pageNumber="+pageNumber+"&pageSize="+pageSize)
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
  getFormById(id:string,pageNumber:number = 1, pageSize:number=15):Observable<any>{
    return this.http.get(this.urls.getFormByIdUrl + id+"?pageNumber="+pageNumber+"&pageSize="+pageSize)
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
  getFormsByName(name: string, pageNumber:number = 1, pageSize:number=15): Observable<any> {
    return this.http.get(this.urls.getFormsByNameUrl + name+"?pageNumber="+pageNumber+"&pageSize="+pageSize)
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
  getFormsByNumber(number: string,pageNumber:number = 1, pageSize:number=15): Observable<any> {
    return this.http.get(this.urls.getFormsByNumberUrl + number+"?pageNumber="+pageNumber+"&pageSize="+pageSize)
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
    return this.http.post(this.urls.addFormUrl,form)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          // Handle the 404 error here, for example:
          console.error('Error adding form', error);
          return throwError('BadRequestError');
        } else {
          // Handle other errors here
          console.error('An error occurred:', error);
          return throwError('An error occurred:'+error);
        }
      })
    );
  }
  updateForm(newForm:Form):Observable<any>{
    return this.http.patch(this.urls.editPatchUrl,newForm)
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
    return this.http.delete(this.urls.deleteFormUrl+id)
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
        //console.log(this.tableNames);
      },
      error: (err) => {
        alert("Error in fetching Table Names:"+err)
      }
  } 
    );
  }
}

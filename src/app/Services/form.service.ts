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
  getTableNamesUrl='https://localhost:7106/api/Table/tableNames';
  getFormsByNameUrl = 'https://localhost:7106/api/Form/FormName:';
  getFormsByNumberUrl = 'https://localhost:7106/api/Form/FormNumber:';
  getAllFormsrUrl = 'https://localhost:7106/api/Form/FormsAll';
  constructor(private http:HttpClient) { }

  getTableNames(){
    return this.http.get(this.getTableNamesUrl);
  }
  createForm(){
  }
  // getFormsByName(name:string):O{
  //   return this.http.get(this.getFormsByNameUrl+name);
  // }
  // getFormsByNumber(number:string){
  //   return this.http.get(this.getFormsByNumberUrl+number);
    
  // }

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
}

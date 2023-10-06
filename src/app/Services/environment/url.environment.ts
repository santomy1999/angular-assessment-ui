import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

  export class Urls {

baseUrl ="https://localhost:7106/api/";

    // getUrls
  getTableNamesUrl=this.baseUrl+'Table/tableNames';
  getTableByIdUrl =this.baseUrl+'Table/table/'
  getFormsByNameUrl = this.baseUrl+'Form/formName:';
  getFormsByNumberUrl = this.baseUrl+'Form/formNumber:';
  getAllFormsrUrl = this.baseUrl+'Form/formsAll';
  getFormByIdUrl= this.baseUrl+'Form/formId:'

  // posturls
  addFormUrl =this.baseUrl+ 'Form/form'

  //updateurls
  editPatchUrl =this.baseUrl+ 'Form/form'

  //deleteUrls
  deleteFormUrl =this.baseUrl+ 'Form/formNumber:';
  }
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormService } from '../Services/form.service';
import { NgForm } from '@angular/forms';
import { Form } from '../Models/form';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  @ViewChild('updateForm') form:NgForm;
  newForm :Form ={
    id:'00000000-0000-0000-0000-000000000000',
    name: null,
    number: null,
    addChangeDeleteFlag: null,
    btnCndAdd: null,
    btnCndCopy: null,
    btnCndDelete: null,
    btnCndModify: null,
    btnCndRenumber: null,
    btnCndView: null,
    btnCndViewDetail: null,
    btnLblAdd: null,
    btnLblCopy: null,
    btnLblDelete: null,
    btnLblModify: null,
    btnLblRenumber: null,
    btnLblView: null,
    btnLblViewDetail: null,
    btnResAdd: null,
    btnResCopy: null,
    btnResDelete: null,
    btnResModify: null,
    btnResRenumber: null,
    btnResView: null,
    btnResViewDetail: null,
    comment: null,
    condition: null,
    helpText: null,
    hidden: 0,
    hidePremium: 0,
    formType:null,
    scriptBefore:null,
    scriptAfter:null,
    maxOccurs: 0,
    minOccurs: 0,
    ratebookId: '00000000-0000-0000-0000-000000000000',
    sequence: 0,
    subSequence: 0,
    tabCondition: null,
    tabResourceName: null,
    tableId: null,
    table:null,
    templateFile: null,
    type: null
  }
  formId :any
  tableNames:anysanto.m 
  currentTable : any ={id:"",name:""}


  result : any
  isHidePremiumChecked:Boolean = false
  isHideFormChecked:Boolean = false

  
  ngOnInit(): void {
    this.tableNames = this.formService.tableNames;
    this.formId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getForm()
    
    
  }
  constructor(private formService : FormService ,private router:Router,private activatedRoute:ActivatedRoute){ }
  
  initPageElements(){
  //   if(this.existingForm.hidePremium!=0){
  //     this.isHidePremiumChecked = true;
  //   }
  //   if(this.existingForm.hidden!=0){
  //     this.isHideFormChecked = true;
  //   }
  }
  onPageSubmit(form:NgForm)
  {
    console.log(this.newForm);
    if(this.form.valid){
      if(this.newForm.type!='Form'){
        this.newForm.formType=null,
        this.newForm.number=null,
        this.newForm.hidden=0,
        this.newForm.hidePremium=0
      }
      if(this.newForm.type=='Details')
      {
       this.newForm.tabCondition=null,
        this.newForm.tabResourceName=null;
        this.newForm.minOccurs=0;
        this.newForm.maxOccurs=0;

      }
      if(this.newForm.type=='Form'||this.newForm.type=='Comment')
      {
        this.newForm.tabCondition=null,
        this.newForm.tabResourceName=null
      }
      if(this.newForm.type!='Template')
      {
        this.newForm.templateFile=null
      
      }
    
      this.formService.updateForm(this.newForm).subscribe
      ({
      next:(r)=>{
      
        alert("Updated Successfully")
      this.router.navigate(['/View-Page',this.newForm.id])
      },
      error: (e) => {
        alert("Error In Updating Form Page")
        this.router.navigate(['/Search-Page'])
      }
      })
    }
   
  }
  getTableNames(){
    this.formService.getTableNames().subscribe({
      next:(res)=>{
        this.tableNames=res
        // console.log(this.tableNames);
      },
      error: (err) => {
        alert("Error in fetching Table Names:"+err)
      }
  } 
    );
    
  }
  getForm(){
    this.result = this.formService.getFormById(this.formId).subscribe({
      next:(res)=>{
        this.newForm=res;
        // console.log(this.existingForm)
        // console.log(this.form.tableId)
        this.getTableName()
        this.getTableNames()
        this.initPageElements()
      },
      error: (err) => {
        alert("Error in fetchingforms:"+err)
      }
    })
  }

  getTableName(){
    if(this.newForm.tableId !=null){
      this.result= this.formService.getTableById(this.newForm.tableId).subscribe({
        next:(res)=>{
          this.currentTable=res
          console.log(this.currentTable); 
        },
        error: (err) => {
          alert("Error in fetching Table Names:"+err)
        }
    } 
      );
      
  }
  }

}

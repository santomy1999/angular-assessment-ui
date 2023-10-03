// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormService } from '../Services/form.service';
import { Form } from '../Models/form';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.css']
})
export class PageCreateComponent {

  @ViewChild('createPage') form :NgForm | undefined;
  newForm :Form ={
    id: '00000000-0000-0000-0000-000000000000',
    name: null,
    number: null,
    comment: null,
    condition: null,
    sequence: 0,
    subSequence: 0,
    tabCondition: null,
    tabResourceName: null,
    helpText: null,
    hidden: 0,
    hidePremium: 0,
    type: null,
    formType:null,
    scriptBefore:null,
    scriptAfter:null,
    maxOccurs: 0,
    minOccurs: 0,
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
    ratebookId: null,
    tableId: null,
    table:null,
    templateFile: null
  }
  

  tableNames:any= [];
  // newForm : Form | undefined ;
  isFormTypeDisabled:Boolean = true
  isFormTypeRequired:Boolean = true

  constructor(private formService : FormService , private router : Router){

  }
  
  enableFormType(){
    
    if(this.form?.value=='Form'){
      this.isFormTypeDisabled = false
      this.isFormTypeRequired = true
    }
  }
  onPageSubmit()
  {
    if(this.form?.valid){
    this.newForm.tableId = this.form.value.Table
    this.newForm.name = this.form.value.Name
    this.newForm.type = this.form.value.Type
    this.newForm.formType = this.form?.value.FormType ?? null
    this.newForm.number= this.form?.value.Number ?? null
    this.newForm.sequence = this.form?.value.Sequence?? 0
    // this.newForm.subSequence = this.form?.value.SubSequence?? 0
    this.newForm.sequence = this.form?.value.Sequence !== "" ? this.form?.value.Sequence : 0;
    this.newForm.subSequence = this.form?.value.SubSequence !== "" ? this.form?.value.SubSequence : 0;
    this.newForm.comment = this.form?.value.Comment?? null
    this.newForm.condition = this.form?.value.Condition?? null
    this.newForm.tabCondition = this.form?.value.TabCondition?? null
    this.newForm.tabResourceName = this.form?.value.TabResource?? null
    this.newForm.minOccurs= this.form?.value.MinimumOccurs !== "" ? this.form?.value.MinimumOccurs : 0;
    this.newForm.maxOccurs= this.form?.value.MaximumOccurs !== "" ? this.form?.value.MaximumOccurs : 0;
    this.newForm.templateFile = this.form?.value.TemplateFile?? null
    this.newForm.helpText = this.form?.value.HelpText?? null
    this.newForm.scriptBefore = this.form?.value.ScriptBefore?? null
    this.newForm.scriptAfter = this.form?.value.ScriptAfter?? null

    if(this.form.value.HidePremium){
      this.newForm.hidePremium = 1
    }
    else this.newForm.hidePremium = 0
    if(this.form.value.HideForm){
      this.newForm.hidden = 1
    }
    else this.newForm.hidden = 0
    

    console.log(this.newForm);
    this.sendPostRequest();
    }
    else{
      window.scrollTo(0, 0)
    }
  }
  sendPostRequest(){
    this.formService.createForm(this.newForm).subscribe({
      next:(res)=>
    {
        alert("Page Added Successfully")
        this.router.navigate(['/View-Page/',res.id])
      },
      error: (e) => {
        alert("Error in Adding New Form Page"+e)
        this.router.navigate(['/Create-Page'])
      }
    }
    )
  }
//   formTypeValidation(){
//   }
  ngOnInit(): void {
    this.formService.getTableNames().subscribe({
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


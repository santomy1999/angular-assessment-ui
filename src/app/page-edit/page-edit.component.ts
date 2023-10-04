import { Component, OnInit, ViewChild } from '@angular/core';
import { FormService } from '../Services/form.service';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit{
  @ViewChild('FormData') formData: NgForm | any;
  tableNames:any
  id:any
  newForm : any={
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
    hidden: null,
    hidePremium: null,
    formType:null,
    scriptBefore:null,
    scriptAfter:null,
    maxOccurs: null,
    minOccurs: null,
    name: null!,
    number: null,
    ratebookId: 'bd0a4d26-ed9e-4f3d-857f-97a9ebae2553',
    sequence: null!,
    subSequence: null!,
    tabCondition: null,
    tabResourceName: null,
    tableId: null,
    templateFile: null,
    type: null,
  }
  ngOnInit(): void {
    window.scrollTo(0, 0)
    console.log(this.formService.tableNames)
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.formService.getFormById(this.id).subscribe({
      next:(res)=>
      {
        this.newForm=res
        this.tableNames=this.formService.tableNames
      },
      error:(e)=>{
        alert("Error Occured While Retrieving Data: "+e)
      }
    })
  }
  constructor(private formService:FormService,private router: Router,private activatedRoute :ActivatedRoute){}
  
  updateForm(){
    if(this.formData.valid){

      if(this.newForm.type!='Form')
      {
        this.newForm.formType=null,
        this.newForm.number=null,
        this.newForm.hidden=null,
        this.newForm.hidePremium=null
        
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
      if(this.newForm.type=='Details')
      {
        this.newForm.minOccurs=null,
        this.newForm.maxOccurs=null,
        this.newForm.tabCondition=null,
        this.newForm.tabResourceName=null;
      }

  

      this.formService.updateForm(this.newForm.id,this.newForm).subscribe
      ({
      next:(r)=>{
      
        alert("Updated Form Successfully")
      this.router.navigate(['View-Page',this.newForm.id])
      },
      error: (e) => {
        alert("ErrorUpdating Form Page")
        this.router.navigate(['Update-Page',this.newForm.id])
      }
      })

    }
  }

}

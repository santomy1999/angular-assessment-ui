import { Component, OnInit } from '@angular/core';
import { Form } from '../Models/form';
import { FormService } from '../Services/form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit{
  form :Form ={
    id:'00000000-0000-0000-0000-000000000000',
    name: '',
    number: '',
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
    comment: '',
    condition: '',
    helpText: '',
    hidden: 0,
    hidePremium: 0,
    formType:'',
    scriptBefore:null,
    scriptAfter:null,
    maxOccurs: 0,
    minOccurs: 0,
    ratebookId: '00000000-0000-0000-0000-000000000000',
    sequence: 0,
    subSequence: 0,
    tabCondition: '',
    tabResourceName: '',
    tableId: null,
    table:null,
    templateFile: null,
    type: ''
  }
  formId :any
  result:any
  tableNames: any
  table :any
  constructor(private formService :FormService,private activatedRoute:ActivatedRoute,private router:Router){
    
  }
ngOnInit(): void {
  window.scrollTo(0, 0)
  this.formId = this.activatedRoute.snapshot.paramMap.get('id');
  this.getForm()
  
  
}
getForm(){
  this.result = this.formService.getFormById(this.formId).subscribe({
    next:(res)=>{
      this.form=res;
      this.getTableName()
    },
    error: (err) => {
      alert("Error in fetchingforms:"+err)
    }
  })
}
getTableName(){
  if(this.form.tableId !=null){
    this.result= this.formService.getTableById(this.form.tableId).subscribe({
      next:(res)=>{
        this.table=res 
      },
      error: (err) => {
        alert("Error in fetching Table Names:"+err)
      }
  } 
    );
    
}
}
deleteForm(id:string){
  if(confirm("Are you sure you want to permenantly delete this form? ")){
    this.formService.deleteForm(id).subscribe({
      next:(res)=>{
        alert("Page Deleted Successfully\n Form Name:"+res.name)
        this.router.navigate(['Search-Page'])
      },
      error:(err)=>{
        alert("Error:"+err)
      }
    });
  }
}
}

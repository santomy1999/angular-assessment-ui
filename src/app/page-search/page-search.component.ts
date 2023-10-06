import { Form } from '../Models/form';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '../Services/form.service';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent implements OnInit{
  // formService.searchResultForm:Form[]=[];
  constructor(private formService:FormService){ }



  filteredForm:any;
  searchValue:string='';

  page:number=1
  lengthofData = 0;
  totalLength: number = 0;

  detailCheckBox:Boolean=false;
  formCheckBox:Boolean=false;
  summaryCheckBox:Boolean=false;

  searchBy:string='name';
  
  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.onSearch();
  }
  

  filterForm() {
    if(this.detailCheckBox||this.formCheckBox||this.summaryCheckBox){
      this.filteredForm= this.formService.searchResultForm.filter(
        item => (item.type === 'Detail' && this.detailCheckBox) || 
        (item.type === 'Form' && this.formCheckBox) ||
        (item.type === 'Summary' && this.summaryCheckBox));
       
      console.log(this.filteredForm);
    }
    else {
      this.filteredForm=this.formService.searchResultForm;
    }
    this.page=1
  }
  

  selectAll(){
    this.detailCheckBox =true;
    this.formCheckBox = true;
    this.summaryCheckBox = true;
  }
  onReset(){
    this.searchBy='name';
    this.detailCheckBox =false;
    this.formCheckBox = false;
    this.summaryCheckBox = false;
    this.searchValue='';
  }
  onSearch(){
    // console.log(this.searchBy)
    // validate the data
    window.scrollTo(400, 400) //bring page to the table
    this.searchValue=this.searchValue.trim();
    if(this.searchValue==''){
      this.formService.getAllForms().subscribe({
        next:(res)=>{
          this.formService.searchResultForm=res;
          console.log(this.formService.searchResultForm);
          this.filterForm();
          this.totalLength = this.filteredForm.length
        },
        error: (err) => {
          alert("Error in fetchingforms:"+err)
        }
      })
    }

    else if(this.searchBy=='name')
    {
        this.formService.getFormsByName(this.searchValue).subscribe({
                next:(res)=>{
                  this.formService.searchResultForm=res;
                  console.log(this.formService.searchResultForm);
                  this.filterForm();
                  // alert("Error in fetching Table Names:"+res)
                },
                error: (err) => {
                  alert("No forms found")
                  this.filteredForm = {}
                }
              })
    }
    else if(this.searchBy=='number')
    {

        this.formService.getFormsByNumber(this.searchValue).subscribe({
          next:(res)=>{
            this.formService.searchResultForm=res
            console.log(this.formService.searchResultForm);
            this.filterForm();
            },
            error: (err) => {
              alert("No forms found")
              }
        })
    }

    // this.filteredForm=this.formService.searchResultForm;
  }
  deleteForm(id:string){
    if(confirm("Are you sure you want to permenantly delete this form? ")){
      this.formService.deleteForm(id).subscribe({
        next:(res)=>{  
            // console.log(res)
          alert("Page Deleted Successfully\n Form Name:"+res.name)
          this.onSearch()
        },
        error:(err)=>{
          alert("Error:"+err)
        }
      });
    }
  }
  
}

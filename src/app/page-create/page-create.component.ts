// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormService } from '../Services/form.service';
import { Form } from '../Models/form';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.css']
})
export class PageCreateComponent {

  @ViewChild('createPage') form :NgForm | undefined;
  tableNames:any= [];
  // newForm : Form | undefined ;


  constructor(private formService : FormService ){

  }
 
  onPageSubmit(form:NgForm)
  {
    console.log(form);

  }
//   formTypeValidation(){
//   }
//   ngOnInit(): void {
//     this.formService.getTableNames().subscribe({
//       next:(res)=>{
//         this.tableNames=res
//         console.log(this.tableNames);
//       },
//       error: (err) => {
//         alert("Error in fetching Table Names:"+err)
//       }
//   } 
//     );
    
//   }
}


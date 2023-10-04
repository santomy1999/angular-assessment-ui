import { Component, OnInit } from '@angular/core';
import { FormService } from './Services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PageMaintenance-UI';
  constructor(private formService:FormService){}
  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.formService.loadTableNames();
    console.log(this.formService.tableNames)
  }
  
}

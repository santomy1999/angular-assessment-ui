import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PageSearchComponent } from './page-search/page-search.component';
import { PageEditComponent } from './page-edit/page-edit.component';
import { ErrorComponent } from './error/error.component';
import { PageViewComponent } from './page-view/page-view.component';
import { PagFieldMaintanenceComponent } from './pag-field-maintanence/pag-field-maintanence.component';

const routes: Routes = [
  {path:'',component:PageSearchComponent},
  {path:'View-Page/:id',component:PageViewComponent},
  {path:'Search-Page',component:PageSearchComponent},
  {path:'Create-Page',component:PageCreateComponent},
  {path:'Page-Maintenance/:id',component:PagFieldMaintanenceComponent},
  {path:'Search-Page',children:[
    {path:'View-Page/:id',component:PageViewComponent}]},
  {path:'Update-Page',component:PageSearchComponent},
  {path:'Update-Page',children:[
    {path:':id',component:PageEditComponent}]},
  {path:'About-us',component:AboutUsComponent},
  {path:'Contact-us',component:ContactUsComponent},
  {path: '**', component: ErrorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

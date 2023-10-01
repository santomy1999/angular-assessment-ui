import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { PageCreateComponent } from './page-create/page-create.component';
import { PageSearchComponent } from './page-search/page-search.component';
import { PageEditComponent } from './page-edit/page-edit.component';

const routes: Routes = [
  {path:'',component:PageSearchComponent},
  {path:'Create Page',component:PageCreateComponent},
  {path:'Update Page',component:PageEditComponent},
  {path:'About-us',component:AboutUsComponent},
  {path:'Contact-us',component:ContactUsComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

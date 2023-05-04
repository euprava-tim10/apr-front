import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RedirectComponent} from "./components/redirect/redirect.component";
import {CompaniesComponent} from "./components/companies/companies.component";
const routes: Routes = [

  { path: 'redirect', component: RedirectComponent },
  { path: 'companies', component: CompaniesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

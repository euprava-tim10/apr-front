import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RedirectComponent} from "./components/redirect/redirect.component";
import {CompaniesComponent} from "./components/companies/companies.component";
import {RegisterCompanyComponent} from "./register-company/register-company.component";
const routes: Routes = [

  { path: 'redirect', component: RedirectComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'register-company', component: RegisterCompanyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

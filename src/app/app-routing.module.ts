import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RedirectComponent} from "./components/redirect/redirect.component";
import {CompaniesComponent} from "./components/companies/companies.component";
import {RegisterCompanyComponent} from "./components/register-company/register-company.component";
import {MyComapanyComponent} from "./components/my-comapany/my-comapany.component";
import {
  CreateJobAdvertisementsComponent
} from "./components/create-job-advertisements/create-job-advertisements.component";
import {ShowJobAdvertisementsComponent} from "./components/show-job-advertisements/show-job-advertisements.component";
import {ShowApplicationsComponent} from "./components/show-applications/show-applications.component";
const routes: Routes = [

  { path: 'redirect', component: RedirectComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'register-company', component: RegisterCompanyComponent },
  { path: 'userCompany', component: MyComapanyComponent },
  { path: 'createJobAdvertisement', component: CreateJobAdvertisementsComponent },
  { path: 'jobAdvertisements', component: ShowJobAdvertisementsComponent },
  { path: 'showApplications/:id', component: ShowApplicationsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

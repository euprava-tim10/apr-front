import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {RedirectComponent} from "./components/redirect/redirect.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {IsAnonymous} from "./auth/guards/IsAnonymous";
import {IsLoggedIn} from "./auth/guards/IsLoggedIn";
import {IsAdmin} from "./auth/guards/IsAdmin";
import {CompaniesComponent} from './components/companies/companies.component';
import {UserService} from "./services/user.service";
import {CompanyService} from "./services/company.service";
import {FormsModule} from "@angular/forms";
import {RegisterCompanyComponent} from './components/register-company/register-company.component';
import {MyComapanyComponent} from './components/my-comapany/my-comapany.component';
import {
  CreateJobAdvertisementsComponent
} from './components/create-job-advertisements/create-job-advertisements.component';
import {JobAdvertisementService} from "./services/job.advertisement.service";
import {ShowJobAdvertisementsComponent} from './components/show-job-advertisements/show-job-advertisements.component';
import {ShowApplicationsComponent} from './components/show-applications/show-applications.component';
import {ChangeStatusCompanyComponent} from './components/change-status-company/change-status-company.component';
import {RequestsChangeStatusComponent} from './components/requests-change-status/requests-change-status.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RedirectComponent,
    CompaniesComponent,
    RegisterCompanyComponent,
    MyComapanyComponent,
    CreateJobAdvertisementsComponent,
    ShowJobAdvertisementsComponent,
    ShowApplicationsComponent,
    ChangeStatusCompanyComponent,
    RequestsChangeStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    IsAnonymous,
    IsLoggedIn,
    IsAdmin,
    UserService,
    CompanyService,
    JobAdvertisementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

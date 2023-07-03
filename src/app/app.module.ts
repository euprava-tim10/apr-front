import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RedirectComponent} from "./components/redirect/redirect.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {IsAnonymous} from "./auth/guards/IsAnonymous";
import {IsLoggedIn} from "./auth/guards/IsLoggedIn";
import {IsAdmin} from "./auth/guards/IsAdmin";
import { CompaniesComponent } from './components/companies/companies.component';
import {UserService} from "./services/user.service";
import {CompanyService} from "./services/company.service";
import {FormsModule} from "@angular/forms";
 import { RegisterCompanyComponent } from './register-company/register-company.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RedirectComponent,
    CompaniesComponent,
    RegisterCompanyComponent
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
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

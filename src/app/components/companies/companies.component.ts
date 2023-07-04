import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Company} from "../../model/company";
import {CompanyService} from "../../services/company.service";
import {UserService} from "../../services/user.service";
import {AuthManagerService} from "../../auth/auth-manager.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  search: string = '';
  isOwnerCompany = false;
  currentUser: User = new User();
  isLoggedIn = false;
  isAdmin = false;

  constructor(private router: Router, private companyService: CompanyService, private userService: UserService, private authManagerService: AuthManagerService) {
  }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(result => {
      this.companies = result;
      this.isLoggedIn = this.authManagerService.isLoggedIn();
      console.log(this.isLoggedIn)
      this.userService.getMyInfo().subscribe((currentUser => {
        console.log("User")
        console.log(currentUser)
        this.currentUser = currentUser;
        this.isOwnerCompany = currentUser.companyId != -1;
      }))
    })


  }

  pretraga() {
    this.companyService.getAllSearch(this.search).subscribe(result => {
      this.companies = result;
    })

  }
}

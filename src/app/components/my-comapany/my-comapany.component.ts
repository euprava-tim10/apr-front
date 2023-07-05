import {Component, OnInit} from '@angular/core';
import {Company} from "../../model/company";
import {Router} from "@angular/router";
import {AuthManagerService} from "../../auth/auth-manager.service";
import {CompanyService} from "../../services/company.service";
import {UserService} from "../../services/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-my-comapany',
  templateUrl: './my-comapany.component.html',
  styleUrls: ['./my-comapany.component.css']
})
export class MyComapanyComponent implements OnInit {
  company: Company = new Company()
  isLoggedIn = false;
  isAdmin = false;
  currentUser: User = new User();
  isOwnerCompany = false;


  constructor(private router: Router, private companyService: CompanyService, private userService: UserService, private authManagerService: AuthManagerService) {
  }

  ngOnInit(): void {
    this.companyService.getUserCompany().subscribe(company => {
      this.company = company
      this.isLoggedIn = this.authManagerService.isLoggedIn();
      this.userService.getMyInfo().subscribe((currentUser => {
        this.currentUser = currentUser;
        this.isOwnerCompany = currentUser.companyId != -1;

      }));
    });
  }

  showChangeStatus() {
    this.router.navigateByUrl("/showChangeStatus" )
  }


}

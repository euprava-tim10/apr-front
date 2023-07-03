import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthManagerService} from "../../auth/auth-manager.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  isOwnerCompany = false;
  currentUser: any;


  constructor(private router: Router, private authManagerService: AuthManagerService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(x => {
      this.isLoggedIn = this.authManagerService.isLoggedIn();
      this.isAdmin = this.authManagerService.isAdmin();
    });
    this.userService.getMyInfo().subscribe((currentUser => {
      this.currentUser = currentUser;
      this.isOwnerCompany = currentUser.companyId != -1;
    }))
  }

  logout() {
    this.isLoggedIn = false;
    this.authManagerService.logoutUserAndRedirect();
  }


  openCompaniesPage() {
    this.router.navigateByUrl('companies');
  }
}

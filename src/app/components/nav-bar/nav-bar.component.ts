import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthManagerService} from "../../auth/auth-manager.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;



  constructor(private router: Router, private authManagerService: AuthManagerService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(x => {
      this.isLoggedIn = this.authManagerService.isLoggedIn();
      this.isAdmin = this.authManagerService.isAdmin();

    });

  }

  logout() {
    this.isLoggedIn = false;
    this.authManagerService.logoutUserAndRedirect();
  }



}

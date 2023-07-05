import {Component, OnInit} from '@angular/core';
import {Request_change_status} from "../../model/request_change_status";
import {RequestChangeStatusService} from "../../services/request.change.status.service";
import {AuthManagerService} from "../../auth/auth-manager.service";

@Component({
  selector: 'app-requests-change-status',
  templateUrl: './requests-change-status.component.html',
  styleUrls: ['./requests-change-status.component.css']
})
export class RequestsChangeStatusComponent implements OnInit {
  requestChangeStatuses: Request_change_status[] = []
  isLoggedIn = false;
  isAdmin = false;

  constructor(private requestChangeStatusService: RequestChangeStatusService, private authManagerService: AuthManagerService) {
  }

  ngOnInit(): void {
    this.requestChangeStatusService.getAll().subscribe(result => {
      this.requestChangeStatuses = result;
      this.isLoggedIn = this.authManagerService.isLoggedIn();
      this.isAdmin = this.authManagerService.isAdmin();
    });

  }

  acceptChangeStatus(id: number) {
    this.requestChangeStatusService.acceptRequestChangeStatus(id).subscribe(data => {
      this.requestChangeStatusService.getAll().subscribe(result => {
        this.requestChangeStatuses = result;
        this.isLoggedIn = this.authManagerService.isLoggedIn();
        this.isAdmin = this.authManagerService.isAdmin();
      });
    });

  }

  rejectChangeStatus(id: number) {
    this.requestChangeStatusService.rejectRequestChangeStatus(id).subscribe(data => {
      this.requestChangeStatusService.getAll().subscribe(result => {
        this.requestChangeStatuses = result;
        this.isLoggedIn = this.authManagerService.isLoggedIn();
        this.isAdmin = this.authManagerService.isAdmin();
      });
    });
  }

}

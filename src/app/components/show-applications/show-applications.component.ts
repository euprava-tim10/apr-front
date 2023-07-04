import { Component, OnInit } from '@angular/core';
import {Application} from "../../model/application";
import {ApplicationService} from "../../services/application.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/user";
import * as path from "path";

@Component({
  selector: 'app-show-applications',
  templateUrl: './show-applications.component.html',
  styleUrls: ['./show-applications.component.css']
})
export class ShowApplicationsComponent implements OnInit {

  applications: Application[]=[]
  id: number = 0;
  constructor(private applicationService: ApplicationService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route
      .paramMap
      .subscribe(params => {
        this.id = Number(params.get("id"))
        this.applicationService.allApplication(this.id).subscribe(result =>
        this.applications = result)
      });

  }


  rejectApplication(userId : number){
    this.applicationService.rejectApplication(this.id, userId).subscribe(result =>
      this.applicationService.allApplication(this.id).subscribe(result =>
        this.applications = result)
    )
  }

  acceptApplication(userId : number ){
    this.applicationService.acceptApplication(this.id, userId).subscribe(result =>
      this.applicationService.allApplication(this.id).subscribe(result =>
        this.applications = result))
  }

}

import {Component, OnInit} from '@angular/core';
import {Job_advertisement} from "../../model/job_advertisement";
import {JobAdvertisementService} from "../../services/job.advertisement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-job-advertisements',
  templateUrl: './show-job-advertisements.component.html',
  styleUrls: ['./show-job-advertisements.component.css']
})
export class ShowJobAdvertisementsComponent implements OnInit {
  jobAdvertisements: Job_advertisement[] = []

  constructor(private router: Router, private jobAdvertisementService: JobAdvertisementService) {
  }

  ngOnInit(): void {
    this.jobAdvertisementService.getAllJobAdvertisementsCompany()
      .subscribe(result =>
        this.jobAdvertisements = result  )

  }


  showApplication(id: number){
    this.router.navigateByUrl("/showApplications/" +  id)
  }
}

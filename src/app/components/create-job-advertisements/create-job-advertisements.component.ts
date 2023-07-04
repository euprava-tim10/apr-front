import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {JobAdvertisementService} from "../../services/job.advertisement.service";

@Component({
  selector: 'app-create-job-advertisements',
  templateUrl: './create-job-advertisements.component.html',
  styleUrls: ['./create-job-advertisements.component.css']
})
export class CreateJobAdvertisementsComponent implements OnInit {
  professions = ["ADMINISTRATION", "ECONOMICS_FINANCE_AND_INSURANCE", "ELECTRICAL_ENGINEERING_AND_TELECOMMUNICATIONS", "MEDICINE", "ARCHITECTURE_CONSTRUCTION_AND_GEODESY", "OTHER"];
  educations = ["NO_EDUCATION_REQUIRED", "PRIMARY_SCHOOL_DEGREE", "SECONDARY_SCHOOL_DEGREE", "FACULTY_DEGREE"];
  endDate: Date= new Date();
  constructor(private router: Router,private jobAdvertisementService: JobAdvertisementService) { }
  profession: string = ""
  education: string= ""

  ngOnInit(): void {

  }
  create() {
    this.jobAdvertisementService.createJobAdvertisement(this.endDate, this.education, this.profession)
      .subscribe(result => {
          alert("Uspesno ste dodali job");
          this.router.navigateByUrl('userCompany');
        }
      )


  }
}

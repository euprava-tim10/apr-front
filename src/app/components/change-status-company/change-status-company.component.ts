import {Component, OnInit} from '@angular/core';
import {Company} from "../../model/company";
import {CompanyService} from "../../services/company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-status-company',
  templateUrl: './change-status-company.component.html',
  styleUrls: ['./change-status-company.component.css']
})
export class ChangeStatusCompanyComponent implements OnInit {
  company: Company = new Company();
  statusesNoActive = [ "DELETED", "FROZEN", "BANKRUPTCY"];
  statusesNoFrozen = ["ACTIVE", "DELETED",  "BANKRUPTCY"];
  statusesNoDeleted = ["ACTIVE", "FROZEN", "BANKRUPTCY"];
  statusesNoBankruptcy = ["ACTIVE", "DELETED", "FROZEN"];
  status: string = ""
  reason: string = "";


  constructor(private companyService: CompanyService, private router: Router) {
  }

  ngOnInit(): void {
    this.companyService.getUserCompany().subscribe(company => {
      this.company = company
    });

  }
  requestChangeStatus(){
    this.companyService.requestStatusChange(this.status, this.company.id, this.reason).subscribe(result=>
      this.router.navigateByUrl('userCompany')
    );

  }

}

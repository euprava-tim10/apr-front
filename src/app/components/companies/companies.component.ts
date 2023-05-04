import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Company} from "../../model/company";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];
  search: string = '';

  constructor(private router: Router, private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(result => {
      this.companies = result;
    })
  }

  pretraga() {
    this.companyService.getAllSearch(this.search).subscribe(result => {
      this.companies = result;
    })

  }
}

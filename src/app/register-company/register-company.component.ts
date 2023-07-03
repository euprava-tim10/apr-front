import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CompanyService} from "../services/company.service";

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  nameValue: string = "";
  pioValue: string = "";
  pibValue: string = "";

  constructor(private companyService: CompanyService, private router: Router) {
  }

  ngOnInit(): void {
  }

  registerCompany() {
    this.companyService.registerCompany(this.nameValue, this.pioValue, this.pibValue)
      .subscribe(result => {
          alert("Uspesno ste registrovali kompaniju");
            this.router.navigateByUrl('companies');
        }
      )


  }
}

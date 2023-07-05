import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {Company} from "../model/company";


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly server: string = "http://localhost:8004";
  private readonly path: string = this.server + "/api/companies";
  private readonly registerPath: string = this.server + "/api/companies/register";
  private readonly userCompanyPath: string = this.server + "/api/companies/userCompany";
  private readonly requestChangeStatus: string = this.server + "/api/changeStatusRequest";

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Company[]> {
    return this.http.get <Company[]>(this.path);
  }

  getAllSearch(search: string, criteriaStr: string): Observable<Company[]> {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("search", search).append("criteria", criteriaStr);

    return this.http.get <Company[]>(this.path, {params: queryParams});
  }

  registerCompany(name: string, pio: string, pib: string): Observable<any> {
    return this.http.post<any>(this.registerPath, {name: name, pio: pio, pib: pib});
  }

  getUserCompany(): Observable<Company> {
    return this.http.get<Company>(this.userCompanyPath);
  }

  requestStatusChange(status: string, companyId: number, reason: string): Observable<any> {

     return this.http.post<void>(this.requestChangeStatus, {companyStatus: status, companyId: companyId, reason: reason})
  }

}

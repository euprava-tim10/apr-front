import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Company} from "../model/company";




@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly path: string = "api/companies";

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Company[]> {
    return this.http.get <Company[]>(this.path);
  }


}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job_advertisement} from "../model/job_advertisement";


@Injectable({
  providedIn: 'root'
})
export class JobAdvertisementService {


  private readonly server: string = "http://localhost:8004";
  private readonly createPath: string = this.server + "/api/jobAdvertisements";
  private readonly allJobAdvertisementsCompany: string = this.server + "/api/jobAdvertisements/company";

  constructor(private http: HttpClient) {
  }

  createJobAdvertisement(endDate: Date, education: string, profession: string): Observable<any> {
    return this.http.post<boolean>(this.createPath, {endDate: endDate,neededEducation: education, profession: profession});
  }

  getAllJobAdvertisementsCompany(): Observable<Job_advertisement[]> {
    return this.http.get <Job_advertisement[]>(this.allJobAdvertisementsCompany);
  }


}

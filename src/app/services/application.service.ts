import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Application} from "../model/application";



@Injectable({
  providedIn: 'root'
})
export class ApplicationService {


  private readonly server: string = "http://localhost:8004";
  private readonly allJobAdvertisementApplications: string = this.server + "/api/notifications/jobAdvertisement/";
  private readonly acceptApplicationPath: string = this.server + "/api/notifications/accept/";
  private readonly rejectApplicationPath: string = this.server + "/api/notifications/reject/";

  constructor(private http: HttpClient) {
  }



  allApplication(jobAdvertisementId:number): Observable<Application[]> {
    return this.http.get <Application[]>(this.allJobAdvertisementApplications + jobAdvertisementId);
  }

  rejectApplication(jobAdvertisementId:number, userId: number): Observable<Application[]> {
    console.log("reject")
    console.log("user id, {}", userId)
    console.log("job id, {}", jobAdvertisementId)
    return this.http.post<any>(this.rejectApplicationPath + userId + "/" + jobAdvertisementId, {});
  }

  acceptApplication(jobAdvertisementId:number, userId: number): Observable<Application[]> {
    console.log("accepted")
    console.log("user id, {}", userId)
    console.log("job id, {}", jobAdvertisementId)
    return this.http.post<any>(this.acceptApplicationPath + userId + "/" + jobAdvertisementId, {});
  }


}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Request_change_status} from "../model/request_change_status";

@Injectable({
  providedIn: 'root'
})
export class RequestChangeStatusService {
  private readonly server: string = "http://localhost:8004";
  private readonly findAllPath: string = this.server + "/api/changeStatusRequest";
  private readonly acceptRequestChangeStatusPath: string = this.server + "/api/changeStatusRequest/accept/";
  private readonly rejectRequestChangeStatusPath: string = this.server + "/api/changeStatusRequest/reject/";

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<Request_change_status[]> {
    return this.http.get <Request_change_status[]>(this.findAllPath);
  }

  acceptRequestChangeStatus(id: number):Observable<any>{
    return  this.http.put<any>(this.acceptRequestChangeStatusPath + id, {});
  }

  rejectRequestChangeStatus(id: number):Observable<any>{
    return  this.http.put<any>(this.rejectRequestChangeStatusPath + id, {});
  }
}

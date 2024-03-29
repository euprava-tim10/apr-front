import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../model/user";



@Injectable({
  providedIn: 'root'
})
export class UserService {


  private readonly server: string = "http://localhost:8004";
  private readonly path: string = this.server + "/api/users/registration";
  private readonly pathUpdateUser: string = this.server +  "/api/users";

  constructor(private http: HttpClient) {
  }

  signUp(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.path, {username: username, password: password});
  }


  getMyInfo(): Observable<User> {
    return this.http.get<User>(this.pathUpdateUser);

  }




}

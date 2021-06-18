import { UserModel } from './../Model/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public ApiUser:string='http://localhost:8080/api/auth/'

  constructor(
    public http:HttpClient,

  ) {

   }
   public getToken(): string {
    return localStorage.getItem('token');
  }
  public authType(): string {
    return localStorage.getItem('auth_type');
  }
  public getuser_id() {
    return localStorage.getItem('user_id');
  }


  public setToken(token: string,auth_type:string,user_id:any) {
    localStorage.setItem('token', token);
    localStorage.setItem('auth_type', auth_type);
    localStorage.setItem('user_id', user_id);
  }
   register(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.ApiUser+'signup',user);
  }
  // validating user credentials
  login(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.ApiUser+'signin',{
      username:user.username,
      password:user.password
    });
  }


}

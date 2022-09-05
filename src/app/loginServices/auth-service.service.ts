import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { loginCredentials } from '../models/loginCredentials';
import { UserModel } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user!:UserModel;
  
  constructor(private http: HttpClient,private jwtHelper: JwtHelperService,private router:Router) { 
    this.user=this.HaveAccess(this.token);
  }
  
  get token():any{
    return localStorage.getItem('jwt')||'';
  }
  
  public login(login:loginCredentials):Observable<string>{
    return this.http.post('https://localhost:7006/api/Login/loginAuthentication',login,
    {
      responseType: 'text'
    }
    );
  
  }

  HaveAccess(token:string):UserModel{
    if (token ==''){
      var user:any;
      return user }
      else
    return JSON.parse(atob(token.split('.')[1])) as UserModel;
    
  }
  IsLogged() {
    return localStorage.getItem("jwt") != null;
  }

  Logout() {
    alert('Your session expired')
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  
}

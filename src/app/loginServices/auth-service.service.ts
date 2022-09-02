import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { loginCredentials } from '../models/loginCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }
  
  
  public login(login:loginCredentials):Observable<string>{
    return this.http.post('https://localhost:7006/api/Login/loginAuthentication',login,
    {
      responseType: 'text'
    }
    );
  
  }

  HaveAccess(){
    var loggintoken=localStorage.getItem('jwt')||'';
    var _extractedtoken=loggintoken.split('.')[1];
    var _atobdata=atob(_extractedtoken);
    var _finaldata=JSON.parse(_atobdata);
    if(_finaldata.role=='admin'){
      return true
    }else{
      alert('you not having access');
      return false
    }
  }

  
}

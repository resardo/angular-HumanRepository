import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthServiceService } from 'src/app/loginServices/auth-service.service';
import { loginCredentials } from 'src/app/models/loginCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginCred = new loginCredentials();
  constructor(private router: Router,private authService: AuthServiceService) { }
  
  login(loginCred: loginCredentials) {
    this.authService.login(loginCred).subscribe((token: string) => {
      localStorage.setItem('jwt', token);
      this.router.navigate(['']);
    });
  }
  
  ngOnInit(): void {
  }

}

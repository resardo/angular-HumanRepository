import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthServiceService } from 'src/app/loginServices/auth-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router,authService:AuthServiceService,private jwtHelper: JwtHelperService) { }
  public logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["/"]);
  }
  ngOnInit(): void {
  }
  isUserAuthenticated() :boolean{
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

 

}

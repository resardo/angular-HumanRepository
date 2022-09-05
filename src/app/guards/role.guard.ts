import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../loginServices/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private service:AuthServiceService){}

  canActivate(route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    
    |Observable<boolean | UrlTree>
    |Promise<boolean | UrlTree>
    |boolean
    |UrlTree{
   return this.service.user.Role.includes(route.data['role']);
  
  }
   
}


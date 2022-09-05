import { Component } from '@angular/core';
import { AuthServiceService } from './loginServices/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-HumanResourcesProject';

  constructor(public _service:AuthServiceService){
    
  }
  
  isLoggedin(){
  this._service.IsLogged();
  }
  
  logOut(){
    this._service.Logout();
  }
}

import { ContainerModule } from './container/container.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
 import { AuthInterceptor } from './loginServices/auth-interceptor';
import { JwtModule } from "@auth0/angular-jwt";
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { AuthGuard } from './guards/auth-guards.service';
import { config } from 'rxjs';


export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'product', component: ProductComponent ,canActivate:[AuthGuard]},
  ]),
  JwtModule.forRoot({

    config:{
      tokenGetter: tokenGetter,
      allowedDomains: ["localhost:7006"],
      disallowedRoutes: []
    }
})
    

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },AuthGuard],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

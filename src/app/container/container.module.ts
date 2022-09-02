import { BrowserModule } from '@angular/platform-browser';
import { HrListComponent } from '../hr-list/hr-list.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
   HrListComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    BrowserModule,
    FormsModule,

  RouterModule.forRoot([
    {path: 'hr-list', component: HrListComponent}
  ]),


  ],

})
export class ContainerModule { }

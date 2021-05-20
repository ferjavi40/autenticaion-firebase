import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { PrimeModule } from 'src/app/primeNg/prime.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PrimeModule
  ]
})
export class LoginModule { }

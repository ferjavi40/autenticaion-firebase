import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PrimeModule } from '../primeNg/prime.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }

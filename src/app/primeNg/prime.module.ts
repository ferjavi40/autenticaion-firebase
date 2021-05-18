import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    InputTextModule
  ]

})
export class PrimeModule { }

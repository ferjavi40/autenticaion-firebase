import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    MenubarModule,
    ButtonModule
  ]

})
export class PrimeModule { }

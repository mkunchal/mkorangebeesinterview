import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V2DisplayRoutingModule } from './v2-display-routing.module';
import { V2DisplayComponent } from './v2-display.component';


@NgModule({
  declarations: [
    V2DisplayComponent
  ],
  imports: [
    CommonModule,
    V2DisplayRoutingModule
  ]
})
export class V2DisplayModule { }

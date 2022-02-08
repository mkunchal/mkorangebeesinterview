import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V2InputRoutingModule } from './v2-input-routing.module';
import { V2CreateComponent } from './pages';


@NgModule({
  declarations: [
    V2CreateComponent
  ],
  imports: [
    CommonModule,
    V2InputRoutingModule
  ]
})
export class V2InputModule { }

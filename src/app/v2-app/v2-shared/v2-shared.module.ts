import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V2NavbarComponent, V2FooterComponent } from './layout';



@NgModule({
  declarations: [
    V2NavbarComponent,
    V2FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class V2SharedModule { }

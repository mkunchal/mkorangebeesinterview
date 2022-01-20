import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';

// - MARK - Angular Material Imports
import { ApiService } from '../framework/services/api/api.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    InputRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class InputModule { }

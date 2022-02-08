import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplayComponent } from './display/display.component';

import { SharedModule } from './shared/shared.module';
import { ApiService } from './framework/services/api/api.service';
import { AlertsService } from './framework/services/alerts/alerts.service';
import { V2CoreModule } from './v2-app/v2-core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    V2CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

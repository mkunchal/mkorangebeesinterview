import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { V2AppRoutingModule } from './v2-app-routing.module';
import { V2AppComponent } from './v2-app.component';
import { V2SharedModule } from './v2-shared';
import { V2CoreModule } from './v2-core';
import { V2PreloaderService } from './v2-preloader.service';



@NgModule({
  declarations: [
    V2AppComponent
  ],
  imports: [
    CommonModule,
    V2AppRoutingModule,
    V2SharedModule,
  ],
  providers: [
    V2PreloaderService
  ]
})
export class V2AppModule { }

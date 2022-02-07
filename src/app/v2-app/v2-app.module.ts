import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { V2AppRoutingModule } from './v2-app-routing.module';
import { V2AppComponent } from './v2-app.component';
import { V2SharedModule } from './v2-shared/v2-shared.module';



@NgModule({
  declarations: [
    V2AppComponent,

  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    V2AppRoutingModule,
    V2SharedModule
  ]
})
export class V2AppModule { }

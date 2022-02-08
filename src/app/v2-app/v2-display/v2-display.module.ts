import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { V2DisplayRoutingModule } from './v2-display-routing.module';
import { V2DisplayComponent } from './v2-display.component';
import { V2DetailComponent } from './pages';
import { V2SharedModule } from '../v2-shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    V2DisplayComponent,
    V2DetailComponent
  ],
  imports: [
    CommonModule,
    V2DisplayRoutingModule,
    V2SharedModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule
  ]
})
export class V2DisplayModule { }

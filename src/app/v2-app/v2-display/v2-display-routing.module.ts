import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V2DetailComponent } from './pages';
import { V2DisplayComponent } from './v2-display.component';

const routes: Routes = [
  {
    path: '',
    component: V2DisplayComponent
  },
  {
    path: 'details',
    component: V2DetailComponent
  },
  {
    path: '',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V2DisplayRoutingModule { }

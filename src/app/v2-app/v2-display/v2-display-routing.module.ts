import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V2DetailComponent } from './pages';
import { V2DisplayComponent } from './v2-display.component';

const routes: Routes = [
  {
    path: 'display',
    component: V2DisplayComponent
  },
  {
    path: 'details',
    component: V2DetailComponent
  },
  {
    path: '',
    redirectTo: '/v2/home/display',
  },
  {
    path: '**',
    redirectTo: '/v2/home/display'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V2DisplayRoutingModule { }

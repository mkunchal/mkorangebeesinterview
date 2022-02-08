import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { V2CreateComponent } from './pages';

const routes: Routes = [
  {
    path: 'create',
    component: V2CreateComponent
  },
  {
    path: '',
    redirectTo: '/v2/input/create'
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
export class V2InputRoutingModule { }

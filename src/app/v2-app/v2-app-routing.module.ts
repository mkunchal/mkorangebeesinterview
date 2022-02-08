import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { V2AppComponent } from './v2-app.component';

const routes: Routes = [
  {
    path: '',
    component: V2AppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./v2-display/v2-display.module').then(m => m.V2DisplayModule),
        data: {
          preload: true, delay:1000
        }
      },
      {
        path: 'input',
        loadChildren: () => import('./v2-input/v2-input.module').then(m => m.V2InputModule),
        data: {
          preload: true, delay:8000
        }
      },
    ]
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
export class V2AppRoutingModule { }

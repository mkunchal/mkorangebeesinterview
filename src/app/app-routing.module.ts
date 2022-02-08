import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';

// - MARK - '' route provides DisplayComponent contains the "### List" of elements displaying the information on a material table with an ability to sort the information by ASCENDING and A-Z.

// - MARK - 'input' route provides a LAZY-LOADED InputModule with routing file where the Form is located to input information.

// - MARK - '**' route handles any unmatched route and just redirects to the input route.

/* - MARK - 'v2' {
    path: 'v2', loadChildren: () => import('./v2/v2-app.module').then(m => m.V2AppModule)
  },
*/

const routes: Routes = [
  {
    path: 'home',
    component: DisplayComponent
  },
  {
    path: 'v2',
    loadChildren: () => import('./v2-app/v2-app.module').then(m => m.V2AppModule)
  },
  {
    path: 'input', loadChildren: () => import('./input/input.module').then(m => m.InputModule)
  },
  {
    path: '**',
    redirectTo: '/v2'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';

// - MARK - '' route provides DisplayComponent contains the "### List" of elements displaying the information on a material table with an ability to sort the information by ASCENDING and A-Z.

// - MARK - 'input' route provides a LAZY-LOADED InputModule with routing file where the Form is located to input information.

// - MARK - '**' route handles any unmatched route and just redirects to the input route.

const routes: Routes = [
  {
    path: '', component: DisplayComponent
  },
  {
    path: 'input', loadChildren: () => import('./input/input.module').then(m => m.InputModule) 
  },
  {
    path: '**',
    redirectTo: 'input'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

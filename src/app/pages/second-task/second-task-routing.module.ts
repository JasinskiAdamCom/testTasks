import { SecondViewComponent } from './second-view/second-view.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: '',
    component: FirstViewComponent,
  },
  {
      path:':amount',
      component: SecondViewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondTaskRoutingModule { }

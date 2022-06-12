import { ThirdTaskComponent } from './third-task.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: '',
    component: ThirdTaskComponent,
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdTaskRoutingModule { }

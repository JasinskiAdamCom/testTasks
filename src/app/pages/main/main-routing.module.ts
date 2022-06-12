import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: 'second-task',
        loadChildren:() =>
          import('../second-task/second-task.module')
            .then((m) => m.SecondTaskModule)
      },
      {
        path: 'third-task',
        loadChildren:() =>
          import('../third-task/third-task.module')
            .then((m) => m.ThirdTaskModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

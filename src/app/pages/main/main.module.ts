import { FlexLayoutModule } from '@angular/flex-layout';
import { FirstTaskModule } from './../first-task/first-task.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FirstTaskModule,
    FlexLayoutModule
  ]
})
export class MainModule { }

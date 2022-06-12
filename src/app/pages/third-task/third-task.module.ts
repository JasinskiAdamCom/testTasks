import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThirdTaskRoutingModule } from './third-task-routing.module';
import { ThirdTaskComponent } from './third-task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ThirdTaskComponent
  ],
  imports: [
    CommonModule,
    ThirdTaskRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ThirdTaskModule { }

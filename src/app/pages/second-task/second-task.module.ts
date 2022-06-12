import { SecondTaskRoutingModule } from './second-task-routing.module';
import { SecondViewComponent } from './second-view/second-view.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    FirstViewComponent,
    SecondViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SecondTaskRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers:[]
})
export class SecondTaskModule {}

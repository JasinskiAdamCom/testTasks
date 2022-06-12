import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.scss']
})
export class FirstViewComponent {

  numberOfInputs = new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10), Validators.pattern("^[0-9]*$")])

  constructor() { 
  }

}

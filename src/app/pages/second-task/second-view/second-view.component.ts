import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.scss']
})
export class SecondViewComponent implements OnInit {

  @ViewChild('alert') alert: TemplateRef<any>;

  private amount: number = Number(this.activatedRoute.snapshot.params['amount'])
  sum: number;

  formGroup = this.fb.group({
    inputs: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  })

  get inputs(){
    return this.formGroup.get('inputs') as FormArray;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    for (let index = 1; index < this.amount; index++) {
      this.addInput()
    }
  }

  private addInput(){
    this.inputs.push(this.fb.control('', Validators.required));
  }

  private sumInputs(){
    this.sum = this.inputs.value.reduce((prev: number , next: number) => prev + +next.valueOf(), 0);
  }

  private openAlert(){
    this.sumInputs();
    this.dialog.open(this.alert);
  }

  onSubmit(){
    this.formGroup.markAllAsTouched()
    if(this.formGroup.valid){
      this.openAlert();
    }
  }
}

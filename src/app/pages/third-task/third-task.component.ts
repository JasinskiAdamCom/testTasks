import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.scss']
})
export class ThirdTaskComponent {

  someText = new FormControl('', 
    [
     this.bracketValidator()
    ],
  )

  constructor() {
    this.someText.markAsTouched();
   }

  isValidBrackets(text: string){
    let stack = [];
    for (let i = 0; i < text.length; i++) {

      let element = text[i];
      
      if(element == '(' || element == '[' || element == '{'){
        stack.push(element);
        continue;
      }
      
      if (stack.length == 0){
        return false;
      }
      
      let check;
      
      switch(element){
        case ')':
          check = stack.pop();
          if(check == '[' || check == '{'){
            return false;
          }
          break;
        case ']':
          check = stack.pop();
          if (check == '(' || check == '{'){
            return false;
          }
          break;
        case '}':
          check = stack.pop();
          if (check == '(' || check == '['){
            return false;
          }
          break;
      }
    }
    return(stack.length == 0);
  }

  bracketValidator(): ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null => {
      const onlyBrackets = /^[{}[\]()]*$/g.test(control.value);
      if(this.isValidBrackets(control.value) && onlyBrackets){
        return null
      }
      else{
        return {invalidBrackets: true}
      }
    }
  }
}

import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  controlDateNotPast(currentDateTime: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (Date.parse(control.value) < currentDateTime) {
        return { dateInPast: {value: true} };
      }
      else {
        return null;
      }
    }
  }
}

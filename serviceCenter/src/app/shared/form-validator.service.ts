import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {
  validForm = false;

  constructor() { }

  check(event) {
    if (event === 'VALID') {
      this.validForm = true;
    }
  }
}

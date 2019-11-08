import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {FormComponent} from './form.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component: FormComponent) {
    if (component.hasUnsavedChanges) {
      return window.confirm('Are you sure you want to leave?');
    }
    return true;
  }
}

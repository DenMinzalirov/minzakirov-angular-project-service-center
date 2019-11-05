import {
  Component, Input,
  OnInit,
} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../../shared/firebase.service';
import {Router} from '@angular/router';
import {debounceTime, delay, map, pluck} from 'rxjs/operators';
import {ifError} from "assert";
import {of, pipe} from "rxjs";

@Component({
  selector: 'app-order-acceptance',
  templateUrl: './order-acceptance.component.html',
  styleUrls: ['./order-acceptance.component.css']
})
export class OrderAcceptanceComponent implements OnInit {
  date = new Date().toLocaleDateString();
  mountYear = this.date.substring(3).replace(/\./g, '-');
  // заглушка из-за требований form-component
  @Input() status = of('новый');

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
  ) { }

  clearOrder = this.firebaseService.loadLastNumberOrder(this.mountYear).pipe(
    map(x => {
      return {
        numberOrder: x,
        dateOrder: this.date,
        status: 'новый'
      };
    })
  );

  updateOrder(event) {
    this.firebaseService.create(event);

  }
  ngOnInit() {
  }
// проверочная функция понять пришла ли база с сервера
  checkBase() {}
}

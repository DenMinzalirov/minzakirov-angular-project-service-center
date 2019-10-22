import {
  Component,
  OnInit,
} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../shared/firebase.service";
import {Router} from "@angular/router";
import {debounceTime, delay, map, pluck} from "rxjs/operators";
import {ifError} from "assert";

@Component({
  selector: 'app-order-acceptance',
  templateUrl: './order-acceptance.component.html',
  styleUrls: ['./order-acceptance.component.css']
})
export class OrderAcceptanceComponent implements OnInit {
  date = this.firebaseService.date;
  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
  ) { }


  order = this.fb.group({
    numberOrder: [{value: '', disabled: false}, [Validators.required]],
    dateOrder: [''],
    brandPhone: [''],
    modelPhone: [''],
    nameClient: [''],
    productType: [''],
    serialNumber: [''],
    malfunction: [''],
    appearance: [''],
    equipment: [''],
    receiverNotes: [''],
    estimatedPrice: [''],
    prepayment: [''],
    manager: [''],
    executor: [''],
    status: ['']
    // статусы: новый, в работе, ждет запчастей, на согласовании, готов, выдан-успешно, выдан-отказ, не подлежит ремонту
  });

  patchNumberOrder() {
    this.firebaseService.loadLastNumberOrder().subscribe(numOrd => {
      this.order.patchValue({
        numberOrder: numOrd,
        dateOrder: this.date,
        status: 'новый'
      });
    });
  }

  ngOnInit() {
    this.patchNumberOrder();
  }

  createOrder() {
    this.firebaseService.create(this.order.value).subscribe(x => this.patchNumberOrder());
    this.order.reset();
  }

// проверочная функция понять пришла ли база с сервера
  checkBase() {
  }
}

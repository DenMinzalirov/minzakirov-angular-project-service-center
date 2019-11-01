import {
  Component, Input,
  OnInit,
} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../shared/firebase.service';
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
  // date = this.firebaseService.date;
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

  // order = this.fb.group({
  //   numberOrder: [{value: '', disabled: false}, [Validators.required]],
  //   dateOrder: [''],
  //   brandPhone: [''],
  //   modelPhone: [''],
  //   nameClient: [''],
  //   productType: [''],
  //   serialNumber: [''],
  //   malfunction: [''],
  //   appearance: [''],
  //   equipment: [''],
  //   receiverNotes: [''],
  //   estimatedPrice: [''],
  //   prepayment: [''],
  //   manager: [''],
  //   executor: [''],
  //   status: ['']
  //   // статусы: новый, в работе, ждет запчастей, на согласовании, готов, выдан-успешно, выдан-отказ, не подлежит ремонту
  // });

  // clearOrder = this.order;

  updateOrder(event) {
    console.log(event);
    this.firebaseService.create(event);
  }

  // patchNumberOrder() {
  //   this.firebaseService.loadLastNumberOrder(this.mountYear).subscribe(numOrd => {
  //     this.order.patchValue({
  //       numberOrder: numOrd,
  //       dateOrder: this.date,
  //       status: 'новый',
  //       brandPhone: '',
  //       modelPhone: '',
  //       nameClient: '',
  //       productType: '',
  //       serialNumber: '',
  //       malfunction: '',
  //       appearance: '',
  //       equipment: '',
  //       receiverNotes: '',
  //       estimatedPrice: '',
  //       prepayment: '',
  //       manager: '',
  //       executor: '',
  //     });
  //   });
  // }

  ngOnInit() {
    // this.patchNumberOrder();
  }

  createOrder() {
    // this.firebaseService.create(this.order.value);

  }

// проверочная функция понять пришла ли база с сервера
  checkBase() {}
}

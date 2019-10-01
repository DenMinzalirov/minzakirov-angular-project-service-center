import {
  Component,
  OnInit,
  DoCheck,
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../shared/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-acceptance',
  templateUrl: './order-acceptance.component.html',
  styleUrls: ['./order-acceptance.component.css']
})
export class OrderAcceptanceComponent implements OnInit, DoCheck {
  order: FormGroup;
  date = this.firebaseService.date;
  // newNumberOrder: number;
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngDoCheck(): void {
    this.firebaseService.loadNumberOrder().subscribe(x => {
      this.order.patchValue({
        numberOrder: x
      })
    });
  }

  ngOnInit() {
     this.order = new FormGroup({
      numberOrder: new FormControl(''),
      dateOrder: new FormControl(this.date),
      brandPhone: new FormControl(''),
      modelPhone: new FormControl('')
    });
  };

  createOrder() {
    this.firebaseService.create(this.order.value).subscribe(x => console.log(x));
    this.ngOnInit();
  }

// проверочная функция понять пришла ли база с сервера
  checkBase() {
    console.log(this.order.value.numberOrder)
  }
}

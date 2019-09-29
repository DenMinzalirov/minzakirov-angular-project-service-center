import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  DoCheck,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../shared/firebase.service";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-order-acceptance',
  templateUrl: './order-acceptance.component.html',
  styleUrls: ['./order-acceptance.component.css']
})
export class OrderAcceptanceComponent implements OnInit, AfterViewInit, OnChanges {
  order: FormGroup;
  date = this.firebaseService.date;
  newNumberOrder: number;
  // @ViewChild('dateOrder', {static: false}) dateOrd: ElementRef;
  constructor(private firebaseService: FirebaseService) {
    // setTimeout(() => {
    //   this.order.patchValue({
    //     numberOrder: this.newNumberOrder
    //   })
    // },1100);
  }

  ngOnInit() {

    // this.firebaseService.load();
    this.firebaseService.loadNumberOrder().subscribe(x => this.newNumberOrder = x+1);

    this.order = new FormGroup({
      numberOrder: new FormControl(),
      dateOrder: new FormControl(this.date),
      brandPhone: new FormControl(''),
      modelPhone: new FormControl('')
    });
// придумать сюда подписку которая примет значение для формы
    setTimeout(() => {
      this.order.patchValue({
        numberOrder: this.newNumberOrder
      })
    },1100);
  };

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.order.patchValue({
    //     numberOrder: this.newNumberOrder
    //   })
    // },1100);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // setTimeout(() => {
    //   this.order.patchValue({
    //     numberOrder: this.newNumberOrder
    //   })
    // },1100);
  }


  createOrder() {
    // const orderForm = this.order.value;
    // console.log(orderForm);
    this.firebaseService.create(this.order.value).subscribe(x => console.log(x));
    this.ngOnInit();
    // this.order.patchValue({
    //       numberOrder: this.newNumberOrder
    //     })

    // сброс значений на поумолчанию надо сделать
    // this.order.reset();
    // this.order.value.dateOrder = this.date;
  }
// проверочная функция понять пришла ли база с сервера
  checkBase() {
    console.log(this.firebaseService.date);
  }
}

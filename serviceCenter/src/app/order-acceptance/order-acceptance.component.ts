import {Component, ElementRef, OnInit, ViewChild, AfterViewInit, DoCheck} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../shared/firebase.service";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-order-acceptance',
  templateUrl: './order-acceptance.component.html',
  styleUrls: ['./order-acceptance.component.css']
})
export class OrderAcceptanceComponent implements OnInit {
  order: FormGroup;
  date = new Date().toLocaleDateString();
  mountYear = this.date.substring(3).replace(/\./g,"-");
  newNumberOrder: number;
  // @ViewChild('dateOrder', {static: false}) dateOrd: ElementRef;
  constructor(private firebaseService: FirebaseService) { }

  loadBase() {
    this.firebaseService.load().subscribe();
    // console.log(this.dateBase)
  }

  loadNumberOrder() {
    this.firebaseService.load()
      .pipe(
        map((x) => {
          const newNumberOrder = [];
          Object.values(x[this.mountYear]).map((x) => {
            // @ts-ignore
            newNumberOrder.push(x.numberOrder)});
          return newNumberOrder.length;
        })
      )
      // полчил из обьекта с сервера обьект чисто по текущему месяцу для номера заказа
      .subscribe(x => this.newNumberOrder = x+1);
  }

  ngOnInit() {
    this.loadBase();
    this.loadNumberOrder();
    // this.date = new Date().toLocaleDateString();

    // const mountYear = this.date.substring(3).replace(/\./g,"-");

    this.order = new FormGroup({
      numberOrder: new FormControl(''),
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

    // this.firebaseService.load()
    //   .pipe(
    //     map((x) => {
    //       const newNumberOrder = [];
    //       Object.values(x[mountYear]).map((x) => {
    //         // @ts-ignore
    //         newNumberOrder.push(x.numberOrder)});
    //       return newNumberOrder.length;
    //     })
    //   )
    //   // полчил из обьекта с сервера обьект чисто по текущему месяцу для номера заказа
    //   .subscribe(x => this.newNumberOrder = x+1);

  };

  createOrder() {
    const orderForm = this.order.value;
    console.log(orderForm);
    this.firebaseService.create(this.order.value).subscribe(x => console.log(x));
    this.order.reset();
    this.order.value.dateOrder = this.date;

  }
// проверочная функция понять пришла ли база с сервера
  checkBase() {
    this.order.patchValue({
      numberOrder: this.newNumberOrder
    });
    // console.log(this.loadNumberOrder());
  }
}

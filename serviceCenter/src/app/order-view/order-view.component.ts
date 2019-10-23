import {AfterContentInit, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {FirebaseService} from '../shared/firebase.service';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit, AfterContentInit, AfterViewInit {
  date = this.firebaseService.date; // сегодняшнее число
  monthYear = this.firebaseService.monthYear; // текущий месяц
  // выбраный месяц
  currentMonth = new Date().toLocaleDateString().substring(3).replace(/\./g, '-');
  monthYearListArr; // список месяцев из базы
  ordersMountList; // массив с закзами за месяц
  // TODO не уверен пока в значении по умолчанию номера заказа
  numberOrder = 1; // выбраный номер заказа
  items;

  orderOutput$: Observable<any>;
  // items: Observable<any[]>;
  // orderObservable: Observable<any>;

  constructor(private firebaseService: FirebaseService, db: AngularFireDatabase) {
    this.items = db.list('orders').snapshotChanges();
  }

  ngOnInit() {
    // массив месяцев работ из базы
    this.firebaseService.loadAllBase()
      .subscribe((x) => {
        this.monthYearListArr = Object.keys(x);
      });
    // получаю массив заказов за месяц текущий
    this.firebaseService.load(this.monthYear)
      .subscribe((x) => {
        this.ordersMountList = x;
      });
  }

  ngAfterViewInit(): void {
    // console.log(this.orderOutput$.subscribe(console.log));
  }

  ngAfterContentInit(): void {
    // console.log(this.orderOutput$.subscribe(console.log));
  }

  selectCurrentMonth(event) {
    // формируем в массив отображаемых заказов за выбраный месяц
    this.firebaseService.load(event)
      .subscribe((x) => {
        this.ordersMountList = x;
      });
    // сохроняем выбранный месяц в переменную
    this.currentMonth = event;
  }

  selectCurrentOrder(event) {
    this.numberOrder = event;
    // TODO стрим для выбраного заказа почему не меняет значение при изменении
    this.orderOutput$ = this.firebaseService.loadOrder(this.currentMonth, this.numberOrder);
    console.log(this.orderOutput$.subscribe(console.log));
    // this.orderOutput$ = this.firebaseService.load(event);
    //  формируем заказ за выбраный номер
    // this.orderInput = event;
    // console.log(this.ordersMountList[event - 1]);
    // this.orderOutput = this.ordersMountList[event - 1];
  }
  updateUser(event) {
    console.log(event);
  }

  check() {
    console.log(this.items.subscribe(console.log));
    // console.log(this.currentMonth);
    // console.log(this.orderOutput$);
    // this.firebaseService.load(this.monthYear).subscribe(console.log);
  }

  temp(event) {
    console.log('tempChange', event);
  }

}

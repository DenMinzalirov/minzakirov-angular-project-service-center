import {AfterContentInit, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {FirebaseService} from '../shared/firebase.service';
import {map} from 'rxjs/operators';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable, of} from 'rxjs';
import {ActivatedRoute, Route, Router} from '@angular/router';

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
  // itemsRef: AngularFireList<any>;

  constructor(private firebaseService: FirebaseService, private db: AngularFireDatabase,
              private router: Router
  ) {
    // TODO не забыть все отрефакторить род  реализацию quick-edit
    // this.itemsRef = db.list('orders/10-2019');
    // this.items = this.itemsRef.snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    // );
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
    this.router.navigate(['order-control', event], {queryParams: {
        numberOrder: event,
        monthYear: this.monthYear
      }});


    // this.numberOrder = event;
    // TODO стрим для выбраного заказа почему не меняет значение при изменении
    // ngOnChanges решение
    // this.orderOutput$ = this.firebaseService.loadOrder(this.currentMonth, this.numberOrder);
    // console.log(this.orderOutput$.subscribe(console.log));
    // this.orderOutput$ = this.firebaseService.load(event);
    //  формируем заказ за выбраный номер
    // this.orderInput = event;
    // console.log(this.ordersMountList[event - 1]);
    // this.orderOutput = this.ordersMountList[event - 1];
  }
  updateOrder(event) {
    this.firebaseService.updateOrder(event, this.currentMonth);
    // console.log(event);
    // this.itemsRef.update(event.numberOrder.toString(), event);
  }

  check() {
    // console.log(this.items
    //   .subscribe(console.log));
    // this.itemsRef.update('8', { executor: 'Андрей' });

    console.log(this.currentMonth);
    // console.log(this.orderOutput$);
    // this.firebaseService.load(this.monthYear).subscribe(console.log);
  }

  temp(event) {
    console.log('tempChange', event);
  }

}

import {Component, DoCheck, OnInit} from '@angular/core';
import {FirebaseService} from '../shared/firebase.service';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  date = this.firebaseService.date; // сегодняшнее число
  monthYear = this.firebaseService.mountYear; // текущий месяц
  currentMonth = new Date().toLocaleDateString().substring(3).replace(/\./g, '-');
  monthYearListArr; // список месяцев из базы
  ordersMountList; // массив с закзами за месяц
  // numberOrder = 1;
  allBase;
  orderInput;
  listOrder
  //   = [{
  //   numberOrder: 1,
  //   dateOrder: 1,
  //   modelPhone: '',
  //   brandPhone: ''
  // }]
  ;
  items: Observable<any[]>;

  constructor(private firebaseService: FirebaseService) {
    // this.items = db.list('order').valueChanges();
  }

  ngOnInit() {
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

  selectCurrentMonth(event) {
    // формируем в массив отображаемых заказов за выбраный месяц
    this.firebaseService.load(event)
      .subscribe((x) => {
        this.ordersMountList = x;
      });
  }

  selectCurrentOrder(event) {
    this.orderInput = event;
    console.log(this.ordersMountList[this.orderInput - 1]);
  }

  check() {
    console.log(this.ordersMountList);
    // this.firebaseService.load(this.monthYear).subscribe(console.log);
  }

}

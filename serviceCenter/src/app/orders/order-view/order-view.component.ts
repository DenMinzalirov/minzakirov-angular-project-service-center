import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../shared/firebase.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  date = this.firebaseService.date; // сегодняшнее число
  monthYear = this.firebaseService.monthYear; // текущий месяц
  // выбраный месяц
  currentMonth = new Date().toLocaleDateString().substring(3).replace(/\./g, '-');
  monthYearListArr; // список месяцев из базы
  ordersMountList; // массив с закзами за месяц
  // TODO не уверен пока в значении по умолчанию номера заказа
  numberOrder = 1; // выбраный номер заказа

  constructor(private firebaseService: FirebaseService,
              private db: AngularFireDatabase,
              private router: Router
  ) { }

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
    this.router.navigate(['orders', event], {queryParams: {
        numberOrder: event,
        monthYear: this.monthYear
      }});
  }

}

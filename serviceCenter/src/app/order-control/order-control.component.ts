import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../shared/firebase.service';

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css']
})
export class OrderControlComponent implements OnInit {
  date = this.firebaseService.date; // сегодняшнее число
  monthYear = this.firebaseService.mountYear; // текущий месяц
  monthYearListArr;
  displayedColumns = [];
  dataSource = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.displayedColumns = ['numberOrder', 'status', 'dateOrder', 'brandPhone', 'modelPhone'];
    // выводит в таблицу за текущий месяц
    this.firebaseService.load(this.monthYear)
      .subscribe((x) => {
        this.dataSource = x;
      });
    // получили список месяцев из базы
    this.firebaseService.loadAllBase()
      .subscribe((x) => {
        this.monthYearListArr = Object.keys(x);
      });
  }
// выбор месяца для отображения
  selectMountYear(event) {
    this.firebaseService.load(event)
      .subscribe((x) => {
        this.dataSource = x;
      });
  }
// получил обьект заказа на клик по строке в таблице
  getOrder(order) {
    console.log(order);
  }

  temp() {
    console.log(this.dataSource);

  }
}

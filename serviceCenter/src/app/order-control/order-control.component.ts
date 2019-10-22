import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../shared/firebase.service';

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css']
})
export class OrderControlComponent implements OnInit {
  // row;
  arrOrders;
  date = this.firebaseService.date; // сегодняшнее число
  monthYear = this.firebaseService.mountYear; // текущий месяц
  monthYearListArr;
  selectedOtherMount;
  tempBase;

  displayedColumns = [];
  dataSource = [];

  constructor(private firebaseService: FirebaseService) { }


  ngOnInit() {
    this.loadObject(this.monthYear);
    // получили список месяцев из базы
    this.firebaseService.load().subscribe(x => {
      this.monthYearListArr = Object.keys(x);
      this.selectedOtherMount = this.monthYear;
    });
    // temp
    this.firebaseService.load().subscribe(tempBase => this.tempBase = tempBase);
  }
// получение всей базы по месяцу для отрисовки
  loadObject(month) {
    this.firebaseService.load()
      .subscribe(x => {
        this.dataSource = Object.values(x[month]);
        this.displayedColumns = ['numberOrder', 'status', 'dateOrder', 'brandPhone', 'modelPhone'];
      });
  }
// выбор месяца для отображения
  selectMountYear(event) {
    this.loadObject(event);
    this.selectedOtherMount = event;
    console.log(event);
  }
// получил обьект заказа на клик по строке в таблице
  getOrder(order) {
    console.log(order);
  }

  temp() {
    const mount = this.selectedOtherMount;
    console.log(mount);
    console.log(this.tempBase);
  }
}

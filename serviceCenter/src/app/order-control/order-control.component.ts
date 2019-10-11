import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css']
})
export class OrderControlComponent implements OnInit {
  arrOrders;
  date = this.firebaseService.date;
  monthYear = this.firebaseService.mountYear;
  monthYearListArr;
  selectedOtherMount;

  displayedColumns = [];
  dataSource = [];

  constructor(private firebaseService: FirebaseService) { }


  ngOnInit() {
    this.loadObject(this.monthYear);
    this.firebaseService.load().subscribe(x => this.monthYearListArr = Object.keys(x))
  }
// получение всей базы по месяцу для отрисовки
  loadObject(month) {
    this.firebaseService.load().pipe(
    ).subscribe(x => {
      this.dataSource = Object.values(x[month])
      this.displayedColumns = ['numberOrder', 'dateOrder', 'brandPhone', 'modelPhone'];

    });
    console.log(this.arrOrders)
  }
// выбор месяца для отображения
  selectMountYear(event) {
    this.loadObject(event);
    this.selectedOtherMount = event;
    console.log(event);
  }

  temp() {
    console.log(this.arrOrders)
  }
}

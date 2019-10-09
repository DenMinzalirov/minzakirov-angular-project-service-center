import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";
import {map} from "rxjs/operators";

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
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.loadObject(this.monthYear);
    this.firebaseService.load().subscribe(x => this.monthYearListArr = Object.keys(x))
  }
// получение всей базы по месяцу для отрисовки
  loadObject(month) {
    this.firebaseService.load().pipe(
    ).subscribe(x => this.arrOrders = Object.values(x[month]));
    console.log(this.arrOrders)
  }
// выбор месяца для отображения
  selectMountYear(event) {
    this.loadObject(event)
    this.selectedOtherMount = event;
    console.log(event);
  }

  temp() {
    // this.firebaseService.load().subscribe(x => this.mountYearList = Object.keys(x))
    console.log(this.selectedOtherMount)
  }
}

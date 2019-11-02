import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../shared/firebase.service';
import {Router, ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css']
})
export class OrderControlComponent implements OnInit {
  date = this.firebaseService.date; // сегодняшнее число
  monthYear = this.firebaseService.monthYear; // текущий месяц
  monthYearListArr;
  displayedColumns = [];
  // TODO определить обьект для отрисовки таблицы
  dataSource = [];
  dataSourceFilter: MatTableDataSource<any>;

  constructor(private firebaseService: FirebaseService,
              private router: Router
  ) { }

  ngOnInit() {
    this.displayedColumns = ['numberOrder', 'status', 'dateOrder', 'brandPhone', 'modelPhone'];
    // выводит в таблицу за текущий месяц
    this.firebaseService.load(this.monthYear)
      .subscribe((x) => {
        this.dataSource = x;
        this.dataSourceFilter = new MatTableDataSource(x);
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
    this.router.navigate(['orders', order.numberOrder], {queryParams: {
        numberOrder: order.numberOrder,
        monthYear: this.monthYear
      }});
    // this.router.navigate([{ outlets: { popup: ['compose'] } }]);
  }
// фильтр строка
  applyFilter(filterValue: string) {
    console.log(filterValue);
    console.log(this.dataSourceFilter);

    this.dataSourceFilter.filter = filterValue.trim().toLowerCase();
  }

  temp() {
    console.log(this.dataSource);

  }
}

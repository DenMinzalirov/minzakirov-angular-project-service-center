import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../shared/firebase.service';
import {Router} from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css']
})
export class OrderControlComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  date = this.firebaseService.date; // сегодняшнее число
  monthYear = this.firebaseService.monthYear; // текущий месяц
  monthYearListArr: string[];
  displayedColumns = [];
  // TODO определить обьект для отрисовки таблицы 2
  dataSourceFilter: MatTableDataSource<any>;

  constructor(private firebaseService: FirebaseService,
              private router: Router
  ) { }

  ngOnInit() {
    this.displayedColumns = ['numberOrder', 'status', 'dateOrder', 'brandPhone', 'modelPhone'];
    // выводит в таблицу за текущий месяц
    this.firebaseService.load(this.monthYear)
      .subscribe((x) => {
        this.dataSourceFilter = new MatTableDataSource(x);
        this.dataSourceFilter.paginator = this.paginator;
      });
    // получили список месяцев из базы
    this.firebaseService.loadAllBase()
      .subscribe((x) => {
        this.monthYearListArr = Object.keys(x);
      });
  }
// выбор месяца для отображения
  selectMountYear(event) {
    this.monthYear = event;
    this.ngOnInit();
  }
// получил обьект заказа на клик по строке в таблице
  getOrder(order) {
    this.router.navigate(['orders', order.numberOrder], {queryParams: {
        numberOrder: order.numberOrder,
        monthYear: this.monthYear
      }});
  }

  applyFilter(filterValue: string) {
    this.dataSourceFilter.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceFilter.paginator) {
      this.dataSourceFilter.paginator.firstPage();
    }
  }

}

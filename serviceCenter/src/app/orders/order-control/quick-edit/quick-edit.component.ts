import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {forkJoin, Observable, of, Subscription} from 'rxjs';
import {FirebaseService} from '../../../shared/firebase.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-quick-edit',
  templateUrl: './quick-edit.component.html',
  styleUrls: ['./quick-edit.component.css']
})
export class QuickEditComponent implements OnInit, OnChanges {
  orderOutput$: Observable<any>;
  infoOrder;
  order;
  status;
  newStatus$: Observable<any> = of('В работе');
  statusArr = ['новый', 'в работе', 'ждет запчастей', 'на согласовании', 'готов', 'выдан-успешно', 'выдан-отказ', 'не подлежит ремонту'];

  constructor(private route: ActivatedRoute,
              private firebaseService: FirebaseService
              ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      x => {this.infoOrder = x; }
    );
    // загрузка ордера из базы по данным из url параметров
    this.orderOutput$ = this.firebaseService.loadOrder(this.infoOrder.monthYear, this.infoOrder.numberOrder).pipe(
      tap((value) => console.log(value)),
    );
    // получение и вывод статуса текущего заказа
    this.orderOutput$.subscribe(x => {this.status = x.status; });
    // this.message = this.route.snapshot;
    // TODO надо подумать про обьединение потокоа чтоб добавить к ордеру статус
  }

  ngOnChanges(changes: SimpleChanges): void {
    // загрузка ордера из базы по данным из url параметров
    // this.orderOutput$ = this.firebaseService.loadOrder(this.infoOrder.monthYear, this.infoOrder.numberOrder);
    // получение и вывод статуса текущего заказа
    // this.orderOutput$.subscribe(x => this.status = x.status);
  }

  updateOrder(event) {
    console.log(event);
    this.firebaseService.updateOrder(event, this.infoOrder.monthYear);
  }

  selectNewStatus(event) {
    this.newStatus$ = of(event);
  }

  check() {
    console.log(this.orderOutput$.subscribe(x => {this.status = x.status; console.log(x); }));
  }

}

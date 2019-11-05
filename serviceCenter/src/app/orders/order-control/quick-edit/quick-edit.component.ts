import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {forkJoin, Observable, of, Subscription} from 'rxjs';
import {FirebaseService} from '../../../shared/firebase.service';
import {map, pluck, startWith, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-quick-edit',
  templateUrl: './quick-edit.component.html',
  styleUrls: ['./quick-edit.component.css']
})
export class QuickEditComponent implements OnInit, OnChanges {
  statusArr: string[] = [
    'новый', 'в работе', 'ждет запчастей', 'на согласовании', 'готов', 'выдан-успешно', 'выдан-отказ', 'не подлежит ремонту'
  ];
  addPartsClick = false;
  partsArrForOrder = {};

  orderOutput$: Observable<any>;
  infoOrder: { [x: string]: any; monthYear?: any; numberOrder?: any; };
  // order: any;
  status;
  newStatus$: Observable<any> = of('В работе');
  parts;
  tempStatus: any;

  constructor(private route: ActivatedRoute,
              private firebaseService: FirebaseService
              ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      x => {this.infoOrder = x; }
    );
    // this.newStatus$ =
    // загрузка ордера из базы по данным из url параметров
    this.orderOutput$ = this.firebaseService.loadOrder(this.infoOrder.monthYear, this.infoOrder.numberOrder).pipe(
      tap((value) => this.status = value.status),
    );
    // список запчастей
    this.parts = this.firebaseService.loadAllParts();
    // получение и вывод статуса текущего заказа
    // this.orderOutput$.subscribe(x => {this.status = x.status; });
    // this.message = this.route.snapshot;
    // TODO надо подумать про обьединение потокоа чтоб добавить к ордеру статус
    // список статусов

  }

  ngOnChanges(changes: SimpleChanges): void {
    // загрузка ордера из базы по данным из url параметров
    // this.orderOutput$ = this.firebaseService.loadOrder(this.infoOrder.monthYear, this.infoOrder.numberOrder);
    // получение и вывод статуса текущего заказа
    // this.orderOutput$.subscribe(x => this.status = x.status);
  }

  updateOrder(event) {
    const addPart = event.parts = this.partsArrForOrder;
    this.firebaseService.updateOrder(event, this.infoOrder.monthYear);
    console.log(addPart, event);
  }

  selectCurrentstatus(event) {
    console.log(event);
  }

  selectNewStatus(event) {
    this.newStatus$ = of(event);
    this.status = event;
  }

  addParts() {
    if (this.addPartsClick) {
      this.addPartsClick = false;
    } else {this.addPartsClick = true; }

    console.log('1');
  }

  setNewParts(event) {
    console.log(event);
  }

  check() {
    console.log(this.partsArrForOrder);
  }

  addPartsInOrder(event: any) {
    console.log(event);
    // TODO на релиз включить
    this.partsArrForOrder[event.id] = event;
    this.addPartsClick = false;
  }
}

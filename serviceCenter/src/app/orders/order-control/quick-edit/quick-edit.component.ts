import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {FirebaseService} from '../../../shared/firebase.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-quick-edit',
  templateUrl: './quick-edit.component.html',
  styleUrls: ['./quick-edit.component.css']
})
export class QuickEditComponent implements OnInit {
  displayedColumns: string[] = ['brand', 'model', 'type', 'price'];
  dataSource: object[];

  statusArr: string[] = [
    'новый', 'в работе', 'ждет запчастей', 'на согласовании', 'готов', 'выдан-успешно', 'выдан-отказ', 'не подлежит ремонту'
  ];
  addPartsClick = false;
  partsObjForOrder = {};

  orderOutput$: Observable<any>;
  infoOrder: { [x: string]: any; monthYear?: any; numberOrder?: any; };
  status;
  newStatus$: Observable<any> = of('В работе');
  parts;
  viewAddPartsInOrder = [];

  constructor(private route: ActivatedRoute,
              private firebaseService: FirebaseService
              ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      x => {this.infoOrder = x; }
    );
    // загрузка ордера из базы по данным из url параметров
    this.orderOutput$ = this.firebaseService.loadOrder(this.infoOrder.monthYear, this.infoOrder.numberOrder).pipe(
      tap((value) => this.status = value.status),
    );
    // список запчастей
    this.parts = this.firebaseService.loadAllParts();
    // получение и вывод статуса текущего заказа
    // TODO надо подумать про обьединение потокоа чтоб добавить к ордеру статус
  }

  updateOrder(event) {
    event.parts = this.partsObjForOrder;
    this.firebaseService.updateOrder(event, this.infoOrder.monthYear);
  }

  selectNewStatus(event) {
    this.newStatus$ = of(event);
    this.status = event;
  }

  addParts() {
    if (this.addPartsClick) {
      this.addPartsClick = false;
    } else {this.addPartsClick = true; }
  }

  addPartsInOrder(event: any) {
    this.partsObjForOrder[event.id] = event;
    this.viewAddPartsInOrder.push(event);
    this.addPartsClick = false;
    this.dataSource = this.viewAddPartsInOrder;
  }
}

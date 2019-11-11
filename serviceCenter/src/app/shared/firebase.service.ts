import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  date = new Date().toLocaleDateString();
  monthYear = this.date.substring(3).replace(/\./g, '-');

  constructor(
    private db: AngularFireDatabase
  ) {}

  create(order) {
    this.db.object(`orders/${this.monthYear}/${order.numberOrder}`).set(order);
  }
    // загрузка только одного месяца
  load(monthYear) {
    return this.db.list(`orders/${monthYear}`).valueChanges();
  }

  loadAllBase() {
    return this.db.object('orders').valueChanges();
  }

// вспомогательная функция для получения последнего нимера заказа
  loadLastNumberOrder(monthYear) {
    return this.load(monthYear).pipe(map(arrMonthOrderAll => arrMonthOrderAll.length + 1));
  }

  // запрос конкретного заказа
  loadOrder(monthOrder, numberOrder) {
    return this.db.object(`orders/${monthOrder}/${numberOrder}`).valueChanges();
  }

  // обновление существующенго заказа в базе
  updateOrder(updateObject, monthOrders) {
    this.db.list(`orders/${monthOrders}`).update(updateObject.numberOrder.toString(), updateObject);
  }

  // TODO список методов для запчастей

  createParts(parts) {
    this.db.object(`parts/${parts.id}`).set(parts);
  }

  loadAllParts() {
    return this.db.list(`parts`).valueChanges();
  }

  delPart(id) {
    this.db.object(`parts/${id}`).remove();
  }
}

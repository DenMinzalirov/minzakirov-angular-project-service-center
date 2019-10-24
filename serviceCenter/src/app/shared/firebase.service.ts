import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // static url = 'https://servicecentr-1415e.firebaseio.com/order';
  date = new Date().toLocaleDateString();
  monthYear = this.date.substring(3).replace(/\./g, '-');

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) {
    // this.orders = db.list('order').valueChanges();
  }

  create(order) {
    this.db.object(`orders/${this.monthYear}/${order.numberOrder}`).set(order);

    // return this.http
    //   .post<any>(`${FirebaseService.url}/${
    //     order.dateOrder.substring(3).replace(/\./g, '-')
    //   }.json`, order);
  }

  load(monthYear) {
    return this.db.list(`orders/${monthYear}`).valueChanges();
    // return this.http.get(`${FirebaseService.url}.json`);
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
}

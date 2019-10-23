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
  mountYear = this.date.substring(3).replace(/\./g, '-');

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) {
    // this.orders = db.list('order').valueChanges();
  }

  create(order) {
    this.db.object(`orders/${this.mountYear}/${order.numberOrder}`).set(order);

    // return this.http
    //   .post<any>(`${FirebaseService.url}/${
    //     order.dateOrder.substring(3).replace(/\./g, '-')
    //   }.json`, order);
  }

  load(mountYear) {
    return this.db.list(`orders/${mountYear}`).valueChanges();
    // return this.http.get(`${FirebaseService.url}.json`);
  }

  loadAllBase() {
    return this.db.object('orders').valueChanges();
  }

// вспомогательная функция для получения последнего нимера заказа
  loadLastNumberOrder(mountYear) {
    return this.load(mountYear).pipe(map(arrMountOrderAll => arrMountOrderAll.length + 1));
  }
}

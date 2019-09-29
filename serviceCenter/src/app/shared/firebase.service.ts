import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  static url ='https://servicecentr-1415e.firebaseio.com/order';
  date = new Date().toLocaleDateString();
  mountYear = this.date.substring(3).replace(/\./g,"-");

  constructor(private http: HttpClient) {}

  create(order) {
    return this.http
      .post<any>(`${FirebaseService.url}/${order.dateOrder.substring(3).replace(/\./g,"-")}.json`, order)
      .pipe(map(res => {
        return {...order, id: res.name}
      }));
  };

  load() {
    return this.http.get(`${FirebaseService.url}.json`)
  };

  loadObjectOrderMount() {
    return this.load().pipe(
      map((x) => {
        Object.values(x[this.mountYear]);
      })
    )
  }

  loadNumberOrder() {
    return this.load().pipe(
      map((x) => {
        const newNumberOrder = [];
        Object.values(x[this.mountYear]).map((x) => {
          // @ts-ignore
          newNumberOrder.push(x.numberOrder)});
        return newNumberOrder.length;
      })
    )
  }
}

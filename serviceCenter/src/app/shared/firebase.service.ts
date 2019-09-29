import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  static url ='https://servicecentr-1415e.firebaseio.com/order';

  constructor(private http: HttpClient) {}

  create(order) {
    return this.http
      .post<any>(`${FirebaseService.url}/${order.dateOrder.substring(3).replace(/\./g,"-")}.json`, order)
      .pipe(map(res => {
        return {...order, id: res.name}
      }));
  };
  load() {
    console.log('load from base');
    return this.http.get(`${FirebaseService.url}.json`)
  }
}

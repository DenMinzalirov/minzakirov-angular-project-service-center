import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { AngularFireDatabase } from '@angular/fire/database'
import {map} from "rxjs/operators";

export interface Order {
  id?: string,
  title: string,
  numberOrder: string,
  date?: string

}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  static url ='https://servicecentr-1415e.firebaseio.com/order';

  constructor(private http: HttpClient,
              private db: AngularFireDatabase
  ) {
    db.list('/order')
      .snapshotChanges().subscribe(console.log)
  }

  create(order) {
    return this.http
      .post<any>(`${FirebaseService.url}/${order.numberOrder}.json`, order)
      .pipe(map(res => {
        console.log('response' ,res);
        return res
      }));

    console.log(order);
    // return this.http
    //   .post(`${FirebaseService.url}/order.value.numberOrder.json`, order)
    //   .pipe(map(res => {
    //     console.log('res', res)
    //     return res;
    //   }))
  }
}

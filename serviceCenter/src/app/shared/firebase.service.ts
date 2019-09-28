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
      .post<any>(`${FirebaseService.url}.json`, order)
      .pipe(map(res => {
        console.log('response' ,res);
        return res
      }));
    console.log(order);
  }
}

import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css']
})
export class OrderControlComponent implements OnInit {
  arrOrders;
  data;
  mountYear;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.loadObject();
    this.mountYear = this.firebaseService.mountYear;
    this.firebaseService.load().subscribe(x => console.log(x));
    this.data = this.firebaseService.date;

    this.firebaseService.load().subscribe(console.log)
  }

  loadObject() {
    this.firebaseService.load().pipe(
      // map((x) => {Object.values(x[this.firebaseService.mountYear])})
    ).subscribe(x => this.arrOrders = Object.values(x[this.firebaseService.mountYear]));
    console.log(this.arrOrders)
  }

}

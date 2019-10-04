import {Component, DoCheck, OnInit} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit, DoCheck {
  currentMonth = new Date().toLocaleDateString().substring(3).replace(/\./g,"-");
  listMonths;
  allBase;
  orderInput = 1;
  listOrder = [{
    numberOrder: 1,
    dateOrder: 1
  }];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.load().subscribe(x => this.allBase = x);

    // this.firebaseService.load().pipe(
    //   map(x => Object.keys(x))
    // ).subscribe(x => this.listMonths = x);

  }
  isObject = function(a) {
    return a instanceof Object && a.constructor === Object;
    // return (!!a) && (a.constructor === Object);
  };

  ngDoCheck(): void {
    if (this.isObject(this.allBase) && this.allBase !== null){
      this.listMonths = Object.keys(this.allBase);
      this.listOrder = Object.values(this.allBase[this.currentMonth]);
    };

    // this.temp = Object.values(this.allBase);
  }

  onRequest(orderInput) {
    console.log(orderInput);
    console.log(this.listOrder[orderInput - 1]);
    console.log(this.listOrder);
  }

  check() {
    // this.firebaseService.load().pipe(
    //   map(x => Object.keys(x))
    // ).subscribe(x => console.log(x));
    console.log(this.allBase)
  }

}

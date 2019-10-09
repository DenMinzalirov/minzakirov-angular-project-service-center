import {Component, DoCheck, OnInit} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit{
  currentMonth = new Date().toLocaleDateString().substring(3).replace(/\./g,"-");
  listMonths;
  numberOrder;
  allBase;
  orderInput = 1;
  listOrder = [{
    numberOrder: 1,
    dateOrder: 1,
    modelPhone: '',
    brandPhone: ''
  }];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.load().subscribe(x => {
      this.allBase = x;
      this.listMonths = Object.keys(x);
      this.listOrder = Object.values(x[this.currentMonth]);
    });
  }

  selectCurrentMonth(event) {
    this.currentMonth = event;
    this.listOrder = Object.values(this.allBase[event])
  }

  selectCurrentOrder(event) {
    this.orderInput = event;
    console.log(this.orderInput)
  }

  check() {

    console.log(this.currentMonth);
    console.log(this.listOrder);
    console.log(this.listMonths)
  }

}

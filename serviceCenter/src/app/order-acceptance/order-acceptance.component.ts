import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-order-acceptance',
  templateUrl: './order-acceptance.component.html',
  styleUrls: ['./order-acceptance.component.css']
})
export class OrderAcceptanceComponent implements OnInit {

  order: FormGroup;

  constructor() { }

  ngOnInit() {
    this.order = new FormGroup({
      numberOrder: new FormControl(''),
      dateOrder: new FormControl(''),
      brandPhone: new FormControl(''),
      modelPhone: new FormControl('')
    });
  }

  createOrder() {
    console.log(this.order)
  }

}

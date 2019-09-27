import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../shared/firebase.service";

@Component({
  selector: 'app-order-acceptance',
  templateUrl: './order-acceptance.component.html',
  styleUrls: ['./order-acceptance.component.css']
})
export class OrderAcceptanceComponent implements OnInit {

  order: FormGroup;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.order = new FormGroup({
      numberOrder: new FormControl('', Validators.required),
      dateOrder: new FormControl('', Validators.required),
      brandPhone: new FormControl('', Validators.required),
      modelPhone: new FormControl('', Validators.required)
    });
  }

  createOrder() {
    this.firebaseService.create(this.order.value).subscribe(x => console.log(x));
    // const {title} =this.order.value;
    // const task ={
    //   title,
    //   date: new Date()
    // };
    // this.firebaseService.create(task).subscribe(task => {
    //   console.log('task', task)
    // })
    // console.log(this.order)
  }

}

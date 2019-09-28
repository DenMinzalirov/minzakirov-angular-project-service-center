import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../shared/firebase.service";

@Component({
  selector: 'app-order-acceptance',
  templateUrl: './order-acceptance.component.html',
  styleUrls: ['./order-acceptance.component.css']
})
export class OrderAcceptanceComponent implements OnInit, AfterViewInit {

  order: FormGroup;

  @ViewChild('dateOrder', {static: false}) dateOrd: ElementRef;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.order = new FormGroup({
      numberOrder: new FormControl(''),
      dateOrder: new FormControl({value: `${new Date().toLocaleDateString()}`, disabled: false}),
      brandPhone: new FormControl(''),
      modelPhone: new FormControl('')
    });
  };

  ngAfterViewInit(): void {
    // получил элемент-значение из таблицы дату
    const nativeElement = this.dateOrd.nativeElement;
    console.log(nativeElement.value);
  }

  createOrder() {
    this.firebaseService.create(this.order.value).subscribe(x => console.log(x));
  }
}

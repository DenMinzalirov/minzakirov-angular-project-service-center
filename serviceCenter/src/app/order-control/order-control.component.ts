import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css']
})
export class OrderControlComponent implements OnInit {
  data;
  constructor() { }

  ngOnInit() {
    this.data = new Date().toLocaleDateString();
    console.log(this.data.replace(/\./g,"-"));

  }

}

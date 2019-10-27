import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {FirebaseService} from '../../shared/firebase.service';

@Component({
  selector: 'app-quick-edit',
  templateUrl: './quick-edit.component.html',
  styleUrls: ['./quick-edit.component.css']
})
export class QuickEditComponent implements OnInit {
  orderOutput$: Observable<any>;
  infoOrder;
  order;

  constructor(private route: ActivatedRoute,
              private firebaseService: FirebaseService
              ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      x => this.infoOrder = x
    );
    this.orderOutput$ = this.firebaseService.loadOrder(this.infoOrder.monthYear, this.infoOrder.numberOrder);

    // this.message = this.route.snapshot;
  }

  updateOrder(event) {
    console.log(event);
    this.firebaseService.updateOrder(event, this.infoOrder.monthYear)
  }

}

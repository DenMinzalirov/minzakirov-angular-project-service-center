import {
  Component, Input,
} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FirebaseService} from '../../shared/firebase.service';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-order-acceptance',
  templateUrl: './order-acceptance.component.html',
  styleUrls: ['./order-acceptance.component.css']
})
export class OrderAcceptanceComponent  {
  date = new Date().toLocaleDateString();
  mountYear = this.date.substring(3).replace(/\./g, '-');
  @Input() status = of('новый');

  constructor(
    // private fb: FormBuilder,
    private firebaseService: FirebaseService,
  ) { }

  clearOrder = this.firebaseService.loadLastNumberOrder(this.mountYear).pipe(
    map(x => {
      return {
        numberOrder: x,
        dateOrder: this.date,
        status: 'новый'
      };
    })
  );

  updateOrder(event) {
    this.firebaseService.create(event);
  }

}

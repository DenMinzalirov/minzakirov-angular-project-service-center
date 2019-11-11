import {
  Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges,
} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FirebaseService} from '../../shared/firebase.service';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';
import {FormValidatorService} from '../../shared/form-validator.service';

@Component({
  selector: 'app-order-acceptance',
  templateUrl: './order-acceptance.component.html',
  styleUrls: ['./order-acceptance.component.css']
})
export class OrderAcceptanceComponent implements OnInit, OnChanges, DoCheck  {

  constructor(
    private firebaseService: FirebaseService,
    private formVal: FormValidatorService
  ) { }
  date = new Date().toLocaleDateString();
  mountYear = this.date.substring(3).replace(/\./g, '-');
  validForm = true;

  @Input() status = of('новый');
  @Input() clearOrder = this.firebaseService.loadLastNumberOrder(this.mountYear).pipe(
    map(x => {
      return {
        numberOrder: x,
        dateOrder: this.date,
        status: 'новый'
      };
    })
  );

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.validForm = this.formVal.validForm;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  updateOrder(event) {
    this.firebaseService.create(event);
    this.validForm = false;
  }

}

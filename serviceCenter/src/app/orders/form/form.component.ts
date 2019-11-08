import {
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges  {

  hasUnsavedChanges = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  order = this.fb.group({
    numberOrder: [{value: '', disabled: false}, [Validators.required]],
    dateOrder: [''],
    brandPhone: [''],
    modelPhone: [''],
    nameClient: [''],
    productType: [''],
    serialNumber: [''],
    malfunction: [''],
    appearance: [''],
    equipment: [''],
    receiverNotes: [''],
    estimatedPrice: [''],
    prepayment: [''],
    manager: [''],
    executor: [''],
    status: [''],
    parts: ['']
  });

  @Output() submitted = new EventEmitter();

  @Input() currentOrder;
  @Input() currentStatus;

  ngOnInit() {
  }
// TODO не уверен стоит ли оставлять в виде потока или сделать обычную переменную @Input
  ngOnChanges(changes: SimpleChanges): void {
    this.currentStatus.subscribe(x => {
      this.order.patchValue({status: x});
    });
    this.currentOrder.subscribe(x => {
      this.order.patchValue(x);
    });
  }

  createOrder(value) {
    this.submitted.emit(value);
    this.router.navigate(['orders/order-created']);
  }
}

import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {
  constructor(private fb: FormBuilder) { }

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
    status: ['']
    // статусы: новый, в работе, ждет запчастей, на согласовании, готов, выдан-успешно, выдан-отказ, не подлежит ремонту
  });

  @Output() submitted = new EventEmitter();

  @Input() currentOrder;

  ngOnInit() {
    // this.currentOrder.subscribe(x => {
    //   this.order.patchValue(x);
    // });
  }
// TODO не уверен стоит ли оставлять в виде потока или сделать обычную переменную @Input
  ngOnChanges(changes: SimpleChanges): void {
    // setTimeout(() => {
    //   this.currentOrder.subscribe(x => {
    //     this.order.patchValue(x);
    //   });
    // }, 0);
    this.currentOrder.subscribe(x => {
      // setTimeout(() => this.order.patchValue(x), 0);
      this.order.patchValue(x);
    });
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
  }

  createOrder(value) {
    this.submitted.emit(value);
  }
}

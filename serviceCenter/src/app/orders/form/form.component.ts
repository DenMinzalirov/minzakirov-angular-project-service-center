import {
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FormValidatorService} from '../../shared/form-validator.service';
import {map, pluck, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges  {
  managers: string[] = ['Минзакиров', 'Коваль', 'Андриенко'];
  filteredManagers: Observable<string[]>;
  executors: string[] = ['Коваль', 'Мистюк', 'Андриенко'];
  filteredExecutors: Observable<string[]>;

  hasUnsavedChanges = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formVal: FormValidatorService
  ) { }

  order: FormGroup = this.fb.group({
    numberOrder: [{value: '', disabled: false}, [Validators.required]],
    dateOrder: ['', [Validators.required]],
    brandPhone: ['', [Validators.required]],
    modelPhone: ['', [Validators.required]],
    nameClient: ['', [Validators.required]],
    productType: ['', [Validators.required]],
    serialNumber: ['', [Validators.required]],
    malfunction: ['', [Validators.required]],
    appearance: ['', [Validators.required]],
    equipment: ['', [Validators.required]],
    receiverNotes: ['', [Validators.required]],
    estimatedPrice: ['', [Validators.required]],
    prepayment: ['нет', [Validators.required]],
    manager: ['', [Validators.required]],
    executor: ['', [Validators.required]],
    status: ['', [Validators.required]],
    parts: ['']
  });

  @Output() submitted = new EventEmitter();

  @Input() currentOrder;
  @Input() currentStatus;

  ngOnInit() {
    this.filteredManagers = this.order.valueChanges
      .pipe(
        pluck('manager'),
        startWith(''),
        map(value => this._filterMan(value))
      );
    this.filteredExecutors = this.order.valueChanges
      .pipe(
        pluck('executor'),
        startWith(''),
        map(value => this._filterExec(value))
      );
  }
  private _filterMan(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.managers.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filterExec(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.executors.filter(option => option.toLowerCase().includes(filterValue));
  }
// TODO не уверен стоит ли оставлять в виде потока или сделать обычную переменную @Input
  ngOnChanges(changes: SimpleChanges): void {
    this.currentStatus.subscribe(x => {
      this.order.patchValue({status: x});
    });
    this.currentOrder.subscribe(x => {
      this.order.patchValue(x);
    });
    this.order.statusChanges.subscribe(
      x => {
        this.formVal.check(x);
      }
    );
  }
  createOrder(value) {
    this.submitted.emit(value.value);
    this.router.navigate(['orders/order-created']);
  }
}

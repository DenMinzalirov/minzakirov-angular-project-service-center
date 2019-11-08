import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, pluck, startWith} from 'rxjs/operators';
import {FirebaseService} from '../../shared/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-parts',
  templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.css']
})
export class AddPartsComponent implements OnInit {
  // TODO разместить поставщиков на back с возможностьб изменения списка
  options: string[] = ['HiGsm', 'GsmSolo', 'TopSet'];
  filteredOptions: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  order = this.fb.group({
    id: [ Math.random().toString(16).slice(2)],
    provider: [''],
    brand: [''],
    model: [''],
    type: [''],
    price: ['']
  });

  ngOnInit() {
    this.filteredOptions = this.order.valueChanges
      .pipe(
        pluck('provider'),
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  createOrder(value: any) {
    this.firebaseService.createParts(value);
    this.router.navigate(['parts/parts-created']);
    console.log(value);
  }

}

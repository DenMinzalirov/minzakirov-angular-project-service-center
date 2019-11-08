import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAcceptanceComponent } from './order-acceptance.component';
import {FormComponent} from '../form/form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FirebaseService} from '../../shared/firebase.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';

describe('OrderAcceptanceComponent', () => {
  let firebaseService: Partial<FirebaseService>;
  class MockFirebaseService {
    loadLastNumberOrder() {
      return of(1);
    }
  }
  let router: Partial<Router>;
  class MockRouter {
    user = {
      name: 'John'
    };
  }
  let component: OrderAcceptanceComponent;
  let fixture: ComponentFixture<OrderAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderAcceptanceComponent,
        FormComponent
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: FirebaseService, useClass: MockFirebaseService },
        { provide: Router, useClass: MockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firebaseService = TestBed.get(FirebaseService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderViewComponent } from './order-view.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatPaginatorModule, MatSelectModule, MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from '@angular/router';
import {FirebaseService} from '../../shared/firebase.service';
import {of} from "rxjs";

describe('OrderViewComponent', () => {
  let firebaseService: Partial<FirebaseService>;
  class MockFirebaseService {
    loadAllBase() {
      return of({name: 'John'});
    }
    load() {
      return of([1]);
    }
  }
  let router: Partial<Router>;
  class MockRouter {
    user = {
      name: 'John'
    };
  }

  let component: OrderViewComponent;
  let fixture: ComponentFixture<OrderViewComponent>;
  // let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderViewComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
      ],
      providers: [
        { provide: FirebaseService, useClass: MockFirebaseService },
        { provide: Router, useClass: MockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firebaseService = TestBed.get(FirebaseService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

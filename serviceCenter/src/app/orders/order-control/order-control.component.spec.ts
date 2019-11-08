import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderControlComponent } from './order-control.component';
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
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FirebaseService} from "../../shared/firebase.service";
import {of} from "rxjs";
import {Router} from "@angular/router";

describe('OrderControlComponent', () => {
  let firebaseService: Partial<FirebaseService>;
  class MockFirebaseService {
    load() {
      return of({ 1: '1'});
    }
    loadAllBase() {
      return { 1: '1'};
    }
    // loadAllBase() {
    //   return of({ 1: '1'});
    // }
  }
  let router: Partial<Router>;
  class MockRouter {
    user = {
      name: 'John'
    };
  }
  let component: OrderControlComponent;
  let fixture: ComponentFixture<OrderControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderControlComponent ],
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
    fixture = TestBed.createComponent(OrderControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firebaseService = TestBed.get(FirebaseService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

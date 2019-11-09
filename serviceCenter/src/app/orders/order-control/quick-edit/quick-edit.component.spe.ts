import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickEditComponent } from './quick-edit.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatFormFieldControl,
  MatFormFieldModule,
  MatInputModule, MatLabel, MatSelectModule, MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../../shared/firebase.service';
import {of} from 'rxjs';
import {RouterTestingModule} from "@angular/router/testing";

describe('QuickEditComponent', () => {
  let route: Partial<ActivatedRoute>;
  let firebaseService: Partial<FirebaseService>;
  let httpMock: HttpTestingController;
  class MockFirebaseService {
    // loadAllParts() {
    //   return of({name: 'John'});
    // }
  }
  class MockRoute {
    params() {
      return of({name: 'John'});
    }
  //   // params = jasmine.createSpy('params');
  }
  let component: QuickEditComponent;
  let fixture: ComponentFixture<QuickEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickEditComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      imports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        // RouterTestingModule,
        HttpClientTestingModule,
        // ReactiveFormsModule,
        // MatAutocompleteModule,
        // MatButtonModule,
        // MatCardModule,
        // MatFormFieldModule,
        // // MatFormFieldControl,
        // MatInputModule,
        // MatTableModule,
        // BrowserAnimationsModule,
      ],
      providers: [
        { provide: FirebaseService, useValue: MockFirebaseService },
        { provide: ActivatedRoute, useClass: MockRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firebaseService = TestBed.get(FirebaseService);
    route = TestBed.get(ActivatedRoute);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

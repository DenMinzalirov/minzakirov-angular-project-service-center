import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickEditComponent } from './quick-edit.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatLabel, MatSelectModule, MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FirebaseService} from "../../../shared/firebase.service";
import {of} from "rxjs";

describe('QuickEditComponent', () => {
  let route: Partial<ActivatedRoute>;
  let firebaseService: Partial<FirebaseService>;
  class MockFirebaseService {
    loadAllParts() {
      return of({name: 'John'});
    }
  }
  class MockRoute {
    params = jasmine.createSpy('params');
  }
  let component: QuickEditComponent;
  let fixture: ComponentFixture<QuickEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickEditComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ],
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsListComponent } from './parts-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FirebaseService} from '../../shared/firebase.service';
import {Router} from "@angular/router";
import {of} from "rxjs";

describe('PartsListComponent', () => {
  let firebaseService: Partial<FirebaseService>;
  class MockFirebaseService {
    loadAllParts() {
      return of({name: 'John'});
    }
  }

  let component: PartsListComponent;
  let fixture: ComponentFixture<PartsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsListComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: FirebaseService, useClass: MockFirebaseService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firebaseService = TestBed.get(FirebaseService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

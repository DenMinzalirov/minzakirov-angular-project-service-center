import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartsComponent } from './add-parts.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatTableModule
} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FirebaseService} from '../../shared/firebase.service';
import {Router} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AddPartsComponent', () => {
  let firebaseService: Partial<FirebaseService>;
  let router: Partial<Router>;

  class MockFirebaseService {
    user = {
      name: 'John'
    };
  }
  class MockRouter {
    user = {
      name: 'John'
    };
  }


  let component: AddPartsComponent;
  let fixture: ComponentFixture<AddPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartsComponent ],
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
        { provide: Router, useClass: MockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firebaseService = TestBed.get(FirebaseService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

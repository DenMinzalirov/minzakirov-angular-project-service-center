import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseService} from '../shared/firebase.service';
import {FormBuilder} from '@angular/forms';

describe('AuthComponent', () => {
  let afAuth: Partial<AngularFireAuth>;
  let fb: Partial<FormBuilder>;
  class MockAfAuth {
    user = {
      name: 'John'
    };
  }
  const formBuilderStub = {
    group: object1 => ({
      invalid: true
    }),
    invalid: true
  };
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: AngularFireAuth, useClass: MockAfAuth },
        { provide: FormBuilder, useValue: formBuilderStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    afAuth = TestBed.get(AngularFireAuth);
    fb = TestBed.get(FormBuilder);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {of} from "rxjs";
import {AuthService} from './auth.service';


describe('AuthComponent', () => {
  let afAuth: Partial<AuthService>;
  const formBuilder: FormBuilder = new FormBuilder();

  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  const MockAfAuth = {
    login(email, password) {
      return of({name: 'John'});
    },
    getAuth() {
      return of({name: 'John'});
    },
    logout() {
      return of({name: 'John'});
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: AuthService, useValue: MockAfAuth },
        { provide: FormBuilder, useValue: formBuilder },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;

    afAuth = TestBed.get(AuthService);
    component.logged = afAuth.getAuth();
    component.user = formBuilder.group({
      email: [{value: '', disabled: false}, [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should use the user name from the formBuilder', () => {
    component.ngOnInit();
    expect(component.user.value).toEqual({email: '', password: '', });
  });
  it('should use onSubmit', () => {
    component.ngOnInit();
    component.onSubmit();
    expect(component.onSubmit).toBeTruthy();
  });
  it('should use getAuth', () => {
    spyOn(afAuth, 'getAuth').and.callThrough();
    component.ngOnInit();
    expect(afAuth.getAuth).toHaveBeenCalled();
  });
  it('should use logout', () => {
    spyOn(afAuth, 'logout');
    component.ngOnInit();
    component.logout();
    expect(afAuth.logout).toHaveBeenCalled();
  });
  it('should use branch', () => {
    component.ngOnInit();
    expect(component.user.valid).toBeFalsy();
    component.user.controls.email.setValue('test@test.com');
    component.user.controls.password.setValue('123456');
    expect(component.user.valid).toBeTruthy();
  });
});

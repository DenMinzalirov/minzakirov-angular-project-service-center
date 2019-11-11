import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FirebaseService} from '../shared/firebase.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {of} from "rxjs";

describe('AuthService', () => {
  let authService: AuthService;
  let afAuth: Partial<AngularFireAuth>;
  let service: AuthService;

  const MockAfAuth = {
    login(email, password) {
      return of({name: 'John'});
    },
    getAuth() {
      return of({name: 'John'});
    },
    signOut() {
      return of({name: 'John'});
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        {provide: AngularFireAuth, useValue: MockAfAuth},
      ]
    });
    authService = TestBed.get(AuthService);
    afAuth = TestBed.get(AngularFireAuth);
  });

  it('should be created', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
  it('should be logout', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const service: AuthService = TestBed.get(AuthService);
    // spyOn(afAuth, 'signOut').and.returnValue('');
    expect(service).toBeTruthy();
  });
});

import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

describe('AuthGuard', () => {
  let afAuth: Partial<AngularFireAuth>;
  let router: Partial<Router>;
  class MockAfAuth {
    user = {
      name: 'John'
    };
  }
  class MockRouter {
    user = {
      name: 'John'
    };
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AngularFireAuth, useClass: MockAfAuth },
        { provide: Router, useClass: MockRouter },
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

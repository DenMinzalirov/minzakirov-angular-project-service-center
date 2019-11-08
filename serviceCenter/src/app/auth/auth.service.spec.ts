import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FirebaseService} from "../shared/firebase.service";
import {AngularFireAuth} from "@angular/fire/auth";

describe('AuthService', () => {
  let afAuth: Partial<AngularFireAuth>;
  class MockAfAuth {
    user = {
      name: 'John'
    };
  }
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      { provide: AngularFireAuth, useClass: MockAfAuth },
    ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});

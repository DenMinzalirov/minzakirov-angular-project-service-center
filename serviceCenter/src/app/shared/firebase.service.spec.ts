import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Router} from '@angular/router';
import {AuthService} from "../auth/auth.service";
import {AngularFireDatabase} from "@angular/fire/database";

describe('FirebaseService', () => {
  let firebaseService: Partial<FirebaseService>;
  const mockOrder = {
    numberOrder: 1
  };
  class MockAngularFireDatabase {
    date = new Date().toLocaleDateString();
    user = {
      name: 'John'
    };
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [HttpClientTestingModule],
      providers: [
        FirebaseService,
        { provide: AngularFireDatabase, useClass: MockAngularFireDatabase },
      ]
    });
    firebaseService = TestBed.get(FirebaseService);
  });

  it('should be created', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service).toBeTruthy();
  });
  it('should be date', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service.date).toBe(new Date().toLocaleDateString() );
  });
  it('should be create', () => {
    // const service: FirebaseService = TestBed.get(FirebaseService);
    // service.create(mockOrder);
  });
});

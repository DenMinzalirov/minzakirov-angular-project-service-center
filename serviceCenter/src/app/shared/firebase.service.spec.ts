import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Router} from '@angular/router';

describe('FirebaseService', () => {
  let firebaseService: Partial<FirebaseService>;
  class MockFirebaseService {
    user = {
      name: 'John'
    };
  }
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      { provide: FirebaseService, useClass: MockFirebaseService },
    ]
  }));

  it('should be created', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service).toBeTruthy();
  });
});

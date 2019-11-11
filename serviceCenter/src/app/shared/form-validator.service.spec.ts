import { TestBed } from '@angular/core/testing';

import { FormValidatorService } from './form-validator.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FirebaseService} from "./firebase.service";

describe('FormValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: []
  }));

  it('should be created', () => {
    const service: FormValidatorService = TestBed.get(FormValidatorService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RegisterValidatorService } from './register-validator.service';

describe('FormCheckService', () => {
  let service: RegisterValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

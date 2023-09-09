import { TestBed } from '@angular/core/testing';

import { ForgetpassserviceService } from './forgetpassservice.service';

describe('ForgetpassserviceService', () => {
  let service: ForgetpassserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetpassserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

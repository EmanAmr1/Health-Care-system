import { TestBed } from '@angular/core/testing';

import { AllLostReqServiceService } from './all-lost-req-service.service';

describe('AllLostReqServiceService', () => {
  let service: AllLostReqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllLostReqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

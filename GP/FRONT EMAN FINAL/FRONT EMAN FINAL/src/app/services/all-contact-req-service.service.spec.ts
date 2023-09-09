import { TestBed } from '@angular/core/testing';

import { AllContactReqServiceService } from './all-contact-req-service.service';

describe('AllContactReqServiceService', () => {
  let service: AllContactReqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllContactReqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

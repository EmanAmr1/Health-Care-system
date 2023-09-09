import { TestBed } from '@angular/core/testing';

import { TandSReqServiceService } from './tand-sreq-service.service';

describe('TandSReqServiceService', () => {
  let service: TandSReqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TandSReqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

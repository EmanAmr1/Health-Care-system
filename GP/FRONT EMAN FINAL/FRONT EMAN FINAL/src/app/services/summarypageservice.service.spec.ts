import { TestBed } from '@angular/core/testing';

import { SummarypageserviceService } from './summarypageservice.service';

describe('SummarypageserviceService', () => {
  let service: SummarypageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummarypageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

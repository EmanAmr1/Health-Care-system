import { TestBed } from '@angular/core/testing';

import { DrprofileserviceService } from './drprofileservice.service';

describe('DrprofileserviceService', () => {
  let service: DrprofileserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrprofileserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

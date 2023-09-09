import { TestBed } from '@angular/core/testing';

import { PharmprofileserviceService } from './pharmprofileservice.service';

describe('PharmprofileserviceService', () => {
  let service: PharmprofileserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmprofileserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

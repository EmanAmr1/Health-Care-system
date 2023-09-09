import { TestBed } from '@angular/core/testing';

import { LabtechprofileserviceService } from './labtechprofileservice.service';

describe('LabtechprofileserviceService', () => {
  let service: LabtechprofileserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabtechprofileserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

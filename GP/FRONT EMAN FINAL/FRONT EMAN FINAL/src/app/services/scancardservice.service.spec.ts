import { TestBed } from '@angular/core/testing';

import { ScancardserviceService } from './scancardservice.service';

describe('ScancardserviceService', () => {
  let service: ScancardserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScancardserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

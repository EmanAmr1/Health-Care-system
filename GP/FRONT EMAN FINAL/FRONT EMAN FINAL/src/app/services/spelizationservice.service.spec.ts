import { TestBed } from '@angular/core/testing';

import { SpelizationserviceService } from './spelizationservice.service';

describe('SpelizationserviceService', () => {
  let service: SpelizationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpelizationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SpliServiceService } from './spli-service.service';

describe('SpliServiceService', () => {
  let service: SpliServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpliServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

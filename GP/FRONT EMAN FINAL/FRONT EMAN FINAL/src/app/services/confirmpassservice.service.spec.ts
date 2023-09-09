import { TestBed } from '@angular/core/testing';

import { ConfirmpassserviceService } from './confirmpassservice.service';

describe('ConfirmpassserviceService', () => {
  let service: ConfirmpassserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmpassserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

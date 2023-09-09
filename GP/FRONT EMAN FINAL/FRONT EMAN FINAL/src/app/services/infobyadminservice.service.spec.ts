import { TestBed } from '@angular/core/testing';

import { InfobyadminserviceService } from './infobyadminservice.service';

describe('InfobyadminserviceService', () => {
  let service: InfobyadminserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfobyadminserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

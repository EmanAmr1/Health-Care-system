import { TestBed } from '@angular/core/testing';

import { InfobyadminService } from './infobyadmin.service';

describe('InfobyadminService', () => {
  let service: InfobyadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfobyadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

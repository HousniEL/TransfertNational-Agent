import { TestBed } from '@angular/core/testing';

import { MultitransfersService } from './multitransfers.service';

describe('MultitransfersServiceService', () => {
  let service: MultitransfersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultitransfersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ComnService } from './comn.service';

describe('ComnService', () => {
  let service: ComnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { V2ApiService } from './v2-api.service';

describe('V2ApiService', () => {
  let service: V2ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V2ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

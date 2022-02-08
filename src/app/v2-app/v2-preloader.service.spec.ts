import { TestBed } from '@angular/core/testing';

import { V2PreloaderService } from './v2-preloader.service';

describe('V2PreloaderService', () => {
  let service: V2PreloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(V2PreloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

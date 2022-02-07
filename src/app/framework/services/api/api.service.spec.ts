import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IMember, MemberApi } from '../../models/iMember';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let member: IMember;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        ApiService
      ]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });
});

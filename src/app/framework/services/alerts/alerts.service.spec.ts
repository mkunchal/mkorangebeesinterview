import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AlertsService } from './alerts.service';
import { HttpClient } from '@angular/common/http';


describe('AlertsService', () => {
  let service: AlertsService;
  let snackBar: MatSnackBar;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AlertsService,
        MatSnackBar
      ]
    });
    service = TestBed.inject(AlertsService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

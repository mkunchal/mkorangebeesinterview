import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';
import { MemberApi, IMember } from '../../models/iMember';
import { Globals } from '../../../globals';

@Injectable()
export class ApiService {
  // - MARK - Fake API Url Here
  apiMain = 'https://fakeApi.com';
  apiMemberRoute = '/Members/Email';
  

  constructor(private http: HttpClient) { }

  // - MARK - The GET Members which returns the number of items and a list of IMember. Typically you could sort in custom ways with API and also only return a certain amount of items per page... This timeout is default set to 1000 since it is an invalid API.
  getMembers(page: number, sort: string): Observable<MemberApi> {
    const url = `${this.apiMain}${this.apiMemberRoute}/&page=${page}&sort=${sort}`;
    console.log('On Get Member Service!');
    return this.http.get<MemberApi>(url)
      .pipe(
        timeout(1000),
        catchError(err => {
          console.error('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      );
  }
  // - MARK - The POST Members, displayed a HttpHeaders since you always will need one with POST. There is also a timeout on the POST.
  addMember(member: IMember): Observable<IMember> {
    const url = `${this.apiMain}${this.apiMemberRoute}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    console.log('On Add Member Service!');
    return this.http.post<IMember>(url, member, httpOptions)
      .pipe(
        timeout(1000),
        catchError(err => {
          console.error('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      )
  }
  // - MARK - Use this after faking the GET Api Request in the Component after the error is thrown upon subscribing.
  readJson(): IMember[] {
    return Globals.fakeData.members;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';
import { MemberApi, IMember } from '../../models/iMember';
import { Globals } from '../../../globals';

@Injectable()
export class ApiService {

  apiMain = 'https://fakeApi.com';
  apiMemberRoute = '/Members/Email';
  // jsonFakeData = 'assets/fakeData.json';
  

  constructor(private http: HttpClient) { }

  getMembers(page: number, sort: string): Observable<MemberApi> {
    const url = `${this.apiMain}${this.apiMemberRoute}/&page=${page}&sort=${sort}`;
    console.log('On Get Member Service!');
    return this.http.get<MemberApi>(url)
      .pipe(
        timeout(1000),
        catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      );
  }

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
          console.log('Error');
          console.log(err);
          if (err.status === 0) {
            console.error('A Client Side Error Occured: ', err.error);
          } else {
            console.error(`Error Status Code ${err.status}, Error Body: `, err.error)
          }
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        })
      )
  }
  // - MARK - Use this after faking the GET Api Request in the Component after the error is thrown upon subscribing. --> sortDirection = 'asc' or 'desc'
  readJson(): IMember[] {
    return Globals.fakeData.members;
  }
  filterJson(sortDirect: string, oldData: IMember[]): IMember[] {
    console.log('On the filter JSON');
    if (sortDirect === 'desc') {
      oldData = oldData.sort((a: IMember, b: IMember) => {
        return b.timeCreated - a.timeCreated; // FROM Newest to Oldest Desc Order
      });
      return oldData;
    } else {
      oldData = oldData.sort((a: IMember, b: IMember) => {
        return a.timeCreated - b.timeCreated; // FROM Oldest to Newest Asc Order
      });
      return oldData;
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { concatMap, Observable, of } from 'rxjs';
import { V2Member } from '../..';
@Injectable({
  providedIn: 'root'
})
export class V2ApiService {

  BASE_URL: string = "http://localhost:8000/";

  // Setting request headers to JSON
  headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
  apiPaths = {
    display: 'api/members'
  };

  httpOptions = {
    headers: this.headers
  };
  constructor(private http: HttpClient) { }


  // WRITE UNIT TESTS FOR SERVICE && WORK ON SPEC FILE/MODELS FOLDER!
  public display(paginator: number): Observable<V2Member[]> {
    const DISPLAY_LIST_URL = `${this.BASE_URL}${this.apiPaths.display}?pag=${paginator}`;
    return this.http.get<V2Member[]>(DISPLAY_LIST_URL, this.httpOptions)
    // --> USE MAP
    /* if (paginator > 9) {
      return of(observeMembers)
    } else if (paginator == 0) {

    } else {

    } */
  }

}

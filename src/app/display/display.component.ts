import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { IMember } from '../framework/models/iMember';
import { AlertsService } from '../framework/services/alerts/alerts.service';
import { ApiService } from '../framework/services/api/api.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements AfterViewInit {

  //memberData: IMember[] = [];
  public memberData = new MatTableDataSource<IMember>();
  colNames: string[] = ['timeCreated', 'emailAddress', 'isPrimary', 'emailTypeId', 'description']; 

  memberLength = 0;
  isLoading = true;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService, private alerts: AlertsService) { }

  // - MARK - Table contains SORT for ASC and DESC of Created, Email Address, and Type ID
  ngAfterViewInit() {
    this.memberData.paginator = this.paginator;
    this.memberData.sort = this.sort;
    this.loadTable();
  }

  // - MARK - Load Table set up to take in an API from HTTPClient. Err on subscribe gets called after timeout which displays alert and the dummy data.

  loadTable() {
    // Default to just one page number

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoading = true;
          return this.apiService.getMembers(1, this.sort.direction);
        }),
        map(data => {
          this.isLoading = false;
          if (data === null) {
            return [];
          }
          this.memberLength = data.count;
          return data.members;
        }),
      )
      .subscribe(
        data => this.memberData.data = data,
        err => {
          this.memberLength = 7; // Default value from dummy data
          this.memberData.data = this.apiService.readJson();
          this.alerts.displayAlert('Invalid API, here is Dummy Member Data')
          this.isLoading = false;
        },
        () => {
          // Will not get called since the API does not work, will resort to calling the error above.
        }
      );
  }

}

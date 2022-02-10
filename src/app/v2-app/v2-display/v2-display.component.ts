import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { V2Member } from '../v2-core';

@Component({
  selector: 'app-v2-display',
  templateUrl: './v2-display.component.html',
  styleUrls: ['./v2-display.component.scss']
})
export class V2DisplayComponent implements AfterViewInit {

  // @Input() v2Members: V2Member[] = [];
  public v2MemberDataSource = new MatTableDataSource<V2Member>()
  colNames: string[] = ['timeCreated', 'emailAddress', 'isPrimary', 'emailTypeId', 'description'];

  memberLength = 0;
  isLoading = true;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  members: V2Member[] = [];

  constructor() {
    this.v2MemberDataSource = new MatTableDataSource(this.members)
  }

  ngAfterViewInit(): void {
    this.v2MemberDataSource.paginator = this.paginator;
    this.v2MemberDataSource.sort = this.sort;
  }



}

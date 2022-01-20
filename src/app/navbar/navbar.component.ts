import { Component, Input, OnInit } from '@angular/core';
import { Globals } from '../globals';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routeNames = Globals.routeNames;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}

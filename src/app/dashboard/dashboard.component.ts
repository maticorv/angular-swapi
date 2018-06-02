import { Component, OnInit } from '@angular/core';

import {PeopleService } from '../people/people.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  people: any[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService
    .getPeople()
    .subscribe(data => {this.people = data.slice(0, 4); });
  }

}

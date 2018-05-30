import { Component, OnInit } from '@angular/core';
import {PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: any[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService
    .getPeople()
    .subscribe(data => {
      this.people = data;
      console.log(data);
    });
  }

}

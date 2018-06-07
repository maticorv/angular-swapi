import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person: any[];

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
  ) { }

  ngOnInit() {
    this.getPerson();
  }
  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.getPerson(id)
    .subscribe(data => {
      this.person = data;
      console.log(data);
    });
  }


}

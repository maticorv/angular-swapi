import { Component, OnInit } from '@angular/core';
import {StarshipsService } from './starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starships: any [];
  constructor( private starshipsService: StarshipsService) { }

  ngOnInit() {
    this.starshipsService
    .getStarships()
    .then(data => {
      this.starships = data;
    });
  }

}

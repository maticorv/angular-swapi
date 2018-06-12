import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: any [];
  constructor(
    private planetService: PlanetsService,
  ) {}

  ngOnInit() {
    console.log('mati'),
    this.planetService
    .getPlanets()
    .then(data => {
      console.log(data);
      this.planets = data;
    });

  }

}

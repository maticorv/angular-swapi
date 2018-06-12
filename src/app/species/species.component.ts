import { Component, OnInit } from '@angular/core';
import { SpeciesService } from './species.service';
@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  species: any [];
  constructor(private speciesService: SpeciesService) { }

  ngOnInit() {
    this.speciesService
          .getSpecies()
          .then(data => {
            this.species = data;
          });
  }

}

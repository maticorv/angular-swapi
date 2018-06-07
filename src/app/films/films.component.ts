import { Component, OnInit } from '@angular/core';
import { FilmService } from './film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: any[];

  constructor(
    private filmService: FilmService,
    private peliculas: string[],
  ) { }

  ngOnInit() {
    this.filmService
    .getFilms()
    .then(data => {
      console.log(data);
      this.films = data;
    });
  }

}

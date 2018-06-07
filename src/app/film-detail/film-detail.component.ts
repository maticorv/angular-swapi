import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from '../films/film.service';
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film: any[];

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
  ) { }

  ngOnInit() {
    console.log('casa');
    this.getFilm();
  }
  getFilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id)
    .then(data => {
      this.film = data;
    });
  }

}

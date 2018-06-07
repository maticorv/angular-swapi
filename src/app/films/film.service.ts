import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RestBaseService } from '../tools/res.tools';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class FilmService extends RestBaseService {
  private url = '/films';
  constructor(private http: HttpClient) {
    super();
  }
  /** GET films from the server */
  getFilms(): Promise<IFilm[]> {
    return this.http
                .get(FilmService.serverUrl + this.url)
                .toPromise()
                .then(response => {
                  return response['results'] as IFilm[];
                });
  }
    // GET film with the id reference
  getFilm(id: Number): Promise<IFilm[]> {
    return this.http
                .get(FilmService.serverUrl + this.url + '/' + id)
                .toPromise()
                .then(response => {
                  return response as IFilm[];
                });
  }
}
export interface IFilm {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}


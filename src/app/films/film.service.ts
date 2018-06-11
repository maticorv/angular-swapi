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
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}


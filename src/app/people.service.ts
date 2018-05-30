import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PeopleService {

  url = 'https://swapi.co/api/people/';

  constructor( private http: HttpClient) { }

  /** GET people from the server */
  getPeople(): Observable<IPeople[]> {
    return this.http.get(this.url)
                .map(data => {
                  return data['results'] as IPeople[];
                });
}
}
// Was generated using the JSON to TS extension for JS
export interface IPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

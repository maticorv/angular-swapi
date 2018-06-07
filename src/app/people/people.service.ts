import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RestBaseService } from '../tools/res.tools';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PeopleService extends RestBaseService {
  private url = '/people';

  constructor( private http: HttpClient) {
    super();
   }

  /** GET people from the server */
  getPeople(): Observable<IPeople[]> {
    return this.http
                .get(PeopleService.serverUrl + this.url)
                .map(data => {
                  return data['results'] as IPeople[];
                });
  }
  // GET person with the id reference
  getPerson(id: number): Observable<IPeople[]> {
    return this.http.get(PeopleService.serverUrl + this.url + '/' + id)
                .map(data => {
                  return data as IPeople[];
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

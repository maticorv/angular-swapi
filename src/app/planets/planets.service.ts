import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestBaseService } from '../tools/res.tools';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlanetsService extends RestBaseService {
  private url = '/planets';
  constructor(private http: HttpClient) {
    super();
   }
   getPlanets(): Promise<IPlanet[]> {
    return this.http
                .get(PlanetsService.serverUrl + this.url)
                .toPromise()
                .then(response => {
                  console.log(response);
                  return response['results'] as IPlanet[];
                });
  }

}
export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

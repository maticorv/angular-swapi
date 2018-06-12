import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestBaseService } from '../tools/res.tools';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SpeciesService extends RestBaseService  {
  private url = '/species';
  constructor(private http: HttpClient) {
    super();
  }
  getSpecies(): Promise<ISpecies[]> {
    return this.http
                .get(SpeciesService.serverUrl + this.url)
                .toPromise()
                .then(response => {
                  return response['results'] as ISpecies[];
                });
  }

}
export interface ISpecies {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

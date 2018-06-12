import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestBaseService } from '../tools/res.tools';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StarshipsService extends RestBaseService {
  private url = '/starships';
  constructor(private http: HttpClient) {
    super();
  }
  getStarships(): Promise<IStarships[]> {
    return this.http
                .get(StarshipsService.serverUrl + this.url)
                .toPromise()
                .then(response => {
                  return response['results'] as IStarships[];
                });
  }
}
export interface IStarships {
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

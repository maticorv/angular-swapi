import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestBaseService } from '../tools/res.tools';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VehiclesService extends RestBaseService {
  private url = '/vehicles';

  constructor(private http: HttpClient) {
    super();
   }
  getVehicles(): Promise<IVehicle[]> {
    return this.http
                .get(VehiclesService.serverUrl + this.url)
                .toPromise()
                .then(response => {
                  return response['results'] as IVehicle[];
                });
  }

}
export interface IVehicle {
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
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}


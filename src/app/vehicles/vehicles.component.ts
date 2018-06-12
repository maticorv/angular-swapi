import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicle: any[];
  constructor(
    private vehicleService: VehiclesService,
  ) { }

  ngOnInit() {
    this.vehicleService
        .getVehicles()
        .then(data => {
          this.vehicle = data;
        });
  }

}

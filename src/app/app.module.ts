import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpaceshipsComponent } from './spaceships/spaceships.component';
import { SpeciesComponent } from './species/species.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpaceshipsComponent,
    SpeciesComponent,
    VehiclesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

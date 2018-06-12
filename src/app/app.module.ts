import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsService } from './planets/planets.service';
import { SpeciesComponent } from './species/species.component';
import { SpeciesService } from './species/species.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesService } from './vehicles/vehicles.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { PeopleService } from './people/people.service';
import { FilmService } from './films/film.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipsService } from './starships/starships.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    VehiclesComponent,
    DashboardComponent,
    PersonDetailComponent,
    FilmDetailComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [PeopleService, FilmService, PlanetsService, SpeciesService, StarshipsService, VehiclesService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }

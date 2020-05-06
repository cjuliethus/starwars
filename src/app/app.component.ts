import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { exists } from 'fs';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'starwars';
  yearMovieFilter = '';
  nameMovieFilter = '';

  constructor(private http: HttpClient, private dataService: DataService) {
    dataService.yearMovie$.subscribe(
      (yearMovie) => (this.yearMovieFilter = yearMovie)
    );
    dataService.nameMovie$.subscribe(
      (nameMovie) => (this.nameMovieFilter = nameMovie)
    );
  }
  readonly ROOT_URL = 'http://swapi.py4e.com/api/films/';
  posts: any;
  getFilms() {
    return this.http.get(this.ROOT_URL);
  }
  readonly ROOT_URL_VEHICLES = 'http://swapi.py4e.com/api/vehicles/';
  getVehicles() {
    return this.http.get(this.ROOT_URL_VEHICLES);
  }

  movieList = [];

  open = false;

  movieDetail = {
    title: '',
    episode_id: '',
    opening_crawl: '',
    release_date: '',
    director: '',
    producer: '',
    planets: [],
    characters: [],
    species: [],
    starships: [],
    vehicles: [],
  };

  vehiclesList = [];

  openDetail(movie) {
    this.open = !this.open;
    this.movieDetail = movie;

    this.getVehicles().subscribe((data: any[]) => {
      console.log(this.movieDetail, data['results']);
      let newVehicles = [];
      this.movieDetail['vehicles'].map((vehicle) => {
        let datos = data['results'];
        let vehiculo = datos.find((element) => element.url == vehicle);
        if (vehiculo != undefined) {
          newVehicles.push(vehiculo);
        }
      });

      this.vehiclesList = newVehicles;
      console.log(newVehicles);
    });
  }
  ngOnInit() {
    this.getFilms().subscribe((data: any[]) => {
      console.log(data['results']);
      this.movieList = data['results'];
    });
  }
}

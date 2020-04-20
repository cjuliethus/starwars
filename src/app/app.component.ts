import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

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
    dataService.yearMovie$.subscribe(yearMovie => this.yearMovieFilter = yearMovie)
    dataService.nameMovie$.subscribe(nameMovie => this.nameMovieFilter = nameMovie)
  }
  readonly ROOT_URL = 'http://swapi.py4e.com/api/films/';
  posts: any;
  getFilms() {
    return this.http.get(this.ROOT_URL);
  }

  movieList = [];

  open = false;
  openDetail() {
    this.open = !this.open;
  }
  ngOnInit() {
    this.getFilms().subscribe((data: any[]) => {
      console.log(data['results']);
      this.movieList = data['results'];
    });
  }
}

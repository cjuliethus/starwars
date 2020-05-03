import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.less'],
})
export class DetailsMovieComponent implements OnInit {
  constructor(private http: HttpClient) {

  }
  @Input()
  open = false;
  @Input()
  title = '';
  @Input()
  episode_movie = 1;
  @Input()
  description = 'Description';
  @Input()
  date_movie = new Date();
  @Input()
  release_date = new Date();
  @Input()
  director = '';
  @Input()
  producer = '';
  @Input()
  planets = [];

  planetDetails = {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: ''
  }

  planetsContent = [];

  @Output()
  public detailClose = new EventEmitter();
  onDetailClose() {
    this.detailClose.emit();
  }

  @Output()
  active_section = 'descripcion';

  @Output()
  activeSection(section) {
    if (section == 'planetas'){
      this.planetsContent = [];
      this.planets.forEach(element => {
        this.getPlanet(element).subscribe((data: any) => {
          this.planetDetails = data;
          this.planetsContent.push(this.planetDetails);
        });
      });
    }
    console.log(this.planetsContent)
    this.active_section = section;
  }

  @Output()
  ngOnInit(): void {}

  getPlanet(planet) {
    return this.http.get(planet);
  }
}

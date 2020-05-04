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
  @Input()
  characters = [];

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

  arrayContentSectionSelected = [];

  @Output()
  public detailClose = new EventEmitter();
  onDetailClose() {
    this.active_section = 'descripcion';
    this.detail_section = '';
    this.detailClose.emit();
  }

  @Output()
  active_section = 'descripcion';

  @Output()
  activeSection(section) {
    if (section == 'planetas'){
      this.getDetailSelected(this.planets)
    }
    if (section == 'personajes'){
      this.getDetailSelected(this.characters)
    }
    console.log(this.arrayContentSectionSelected)
    this.active_section = section;
  }

  @Output()
  ngOnInit(): void {}

  getDetailSelected(array) {
    this.arrayContentSectionSelected = [];
    array.forEach(character => {
      this.getServiceFor(character).subscribe((data: any) => {
        this.arrayContentSectionSelected.push(data);
      });
    });
  }

  getServiceFor(url) {
    return this.http.get(url);
  }

  detail_section = '';

  showDetail(name){
    this.detail_section = name;
  }
}

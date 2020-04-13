import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor() { }

  open = false;
  openFilterCriteria() {
    this.open = !this.open;
  }

  ngOnInit(): void {
  }

}

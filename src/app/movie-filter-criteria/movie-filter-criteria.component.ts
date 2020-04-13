import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-filter-criteria',
  templateUrl: './movie-filter-criteria.component.html',
  styleUrls: ['./movie-filter-criteria.component.less']
})
export class MovieFilterCriteriaComponent implements OnInit {
  constructor() { }

  @Input()
  open = false;

  closeFilterCard() {
    this.open = false;
  }

  ngOnInit(): void {
  }
}

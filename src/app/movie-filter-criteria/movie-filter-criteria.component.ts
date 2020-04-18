import { Component, OnInit, Input } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-movie-filter-criteria',
  templateUrl: './movie-filter-criteria.component.html',
  styleUrls: ['./movie-filter-criteria.component.less']
})
export class MovieFilterCriteriaComponent implements OnInit {

  years = Number[200]

  constructor() {
    this.years = this.getYears()
  }

  @Input()
  open = false;

  getYears() {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    return range(1900,2020,1)
  }

  closeFilterCard() {
    this.open = false;
  }

  ngOnInit(): void {
  }
}

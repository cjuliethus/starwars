import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-filter-criteria',
  templateUrl: './movie-filter-criteria.component.html',
  styleUrls: ['./movie-filter-criteria.component.less']
})
export class MovieFilterCriteriaComponent implements OnInit {

  movieYearSelected = '';
  years = [];

  constructor(private dataService: DataService) {
    this.years = this.getYears()
  }

  @Input()
  open = false;

  getYears() {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    return range(1977,2015,1)
  }

  closeFilterCard() {
    this.open = false;
  }

  onChangeYear(year) {
    this.dataService.yearMovie$.emit(year)
  }
  onChangeName(name){
    this.dataService.nameMovie$.emit(name)
  }

  ngOnInit(): void {
  }
}

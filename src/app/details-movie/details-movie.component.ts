import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.less'],
})
export class DetailsMovieComponent implements OnInit {
  constructor() {}
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

  @Output()
  public detailClose = new EventEmitter();
  onDetailClose() {
    this.detailClose.emit();
  }

  ngOnInit(): void {}
}

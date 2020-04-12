import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.less'],
})
export class DetailsMovieComponent implements OnInit {
  constructor() {}
  @Input()
  open = false;

  ngOnInit(): void {}
}

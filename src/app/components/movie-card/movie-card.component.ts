import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  constructor() {}
  @Input()
  id = 0;
  @Input()
  title = 'TITLE';
  @Input()
  episode = 1;
  @Input()
  description = 'Description';
  @Input()
  date = new Date();

  @Output()
  public movieClick = new EventEmitter<number>();
  public handleClick(event: MouseEvent) {
    this.movieClick.emit(this.id);
  }
  ngOnInit(): void {}
}

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  yearMovie$ = new EventEmitter<string>();

  nameMovie$ = new EventEmitter<string>();

  constructor() { }
}

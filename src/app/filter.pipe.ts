import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, yearMovie: any, nameMovie: any): any[] {
    var movies = []
    if (yearMovie === "" && nameMovie === "") {
      return values
    }
    if (nameMovie != "" && yearMovie != "") {
      values.forEach(element => {
        if (element.release_date.split("-", 1)[0] === yearMovie && element.title.toLowerCase().indexOf(nameMovie.toLowerCase()) > -1) {
          movies.push(element)
        }
      });
    } else if (nameMovie != "" && yearMovie === "") {
      values.forEach(element => {
        if (element.title.toLowerCase().indexOf(nameMovie.toLowerCase()) > -1) {
          movies.push(element)
        }
      });
    } else if (nameMovie === "" && yearMovie != "") {
      values.forEach(element => {
        if (element.release_date.split("-", 1)[0] === yearMovie) {
          movies.push(element)
        }
      });
    }
    return movies;
  }

}

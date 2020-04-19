import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, filters: any): any[] {
    var movies = []
    if (filters === "") {
      return values
    }
    values.forEach(element => {
      if (element.release_date.split("-",1)[0] === filters) {
        movies.push(element)
      }
    });
    return movies;
  }

}

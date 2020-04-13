import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { MovieFilterCriteriaComponent } from './movie-filter-criteria/movie-filter-criteria.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsMovieComponent,
    MovieCardComponent,
    DateFormatPipe,
    MovieFilterComponent,
    MovieFilterCriteriaComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

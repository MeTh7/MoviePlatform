import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, distinctUntilChanged, map, Observable } from 'rxjs';

import { Criteria } from './criteria/models/criteria.model';
import { Movie } from './models/favorite-movie.model';
import { MovieDto } from './models/movie-response.model';
import { CriteriaResolverService } from './services/criteria-resolver.service';
import { MovieApiClientService } from './services/movie-api-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movies$: Observable<Movie[]> = combineLatest([
    this.movieApiClientService
      .getPlayingNow()
      .pipe(map((response) => response.results)),
    this.store.select((store) => store.criteria).pipe(distinctUntilChanged()),
  ]).pipe(
    map(([movies, criteria]) =>
      this.criteriaResolverService.resolve(
        this.convertFavoriteMovies(movies, criteria.favorites),
        criteria
      )
    )
  );

  constructor(
    private movieApiClientService: MovieApiClientService,
    private store: Store<{ criteria: Criteria }>,
    private criteriaResolverService: CriteriaResolverService
  ) {}

  private convertFavoriteMovies(
    movies: MovieDto[],
    favorites: number[]
  ): Movie[] {
    return movies.map((movie) => ({
      ...movie,
      favorite: favorites.some((f) => f === movie.id),
    }));
  }
}

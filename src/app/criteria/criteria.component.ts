import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest, first, map, Observable } from 'rxjs';

import { Genre } from '../models/genre.model';
import { MovieDto } from '../models/movie-response.model';
import { MovieApiClientService } from '../services/movie-api-client.service';
import { CriteriaViewData } from './models/criteria-view-data.model';
import { Criteria } from './models/criteria.model';
import { CriteriaActions } from './store/criteria.actions';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss'],
})
export class CriteriaComponent {
  @Input() movies: MovieDto[] | undefined;

  viewData$: Observable<CriteriaViewData> = combineLatest([
    this.movieApiClientService.getGenres(),
    this.store.select((store) => store.criteria).pipe(first()),
  ]).pipe(
    map(([genreResponse, criteria]) => ({
      form: this.formBuilder.group({
        favoritesOnly: criteria.favoritesOnly,
        searchTitle: criteria.searchTitle,
        orderBy: criteria.orderBy,
        genre: criteria.genre,
      }),
      genres: this.getPossibleGenres(genreResponse.genres),
    }))
  );

  constructor(
    private store: Store<{ criteria: Criteria }>,
    private formBuilder: FormBuilder,
    private movieApiClientService: MovieApiClientService
  ) {}

  setCriteria(form: FormGroup): void {
    this.store.dispatch(CriteriaActions.set({ criteria: form.getRawValue() }));
  }

  private getPossibleGenres(genres: Genre[]): Genre[] {
    return genres.filter((genre) =>
      this.movies?.some((movie) => movie.genre_ids.some((g) => g === genre.id))
    );
  }
}

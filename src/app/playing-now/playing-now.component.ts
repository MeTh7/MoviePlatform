import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { Criteria } from '../criteria/models/criteria.model';
import { CriteriaActions } from '../criteria/store/criteria.actions';
import { Movie } from '../models/favorite-movie.model';
import { MovieDto } from '../models/movie-response.model';

@Component({
  selector: 'app-playing-now',
  templateUrl: './playing-now.component.html',
  styleUrls: ['./playing-now.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayingNowComponent {
  @Input() movies?: Movie[];

  constructor(private store: Store<{ criteria: Criteria }>) {}

  getImage(movie: MovieDto): string {
    return `${environment.movieImagesApi}/${movie.poster_path}`;
  }

  setFavorite(id: number): void {
    this.store.dispatch(CriteriaActions.setFavorite({ id }));
  }

  removeFavorite(id: number): void {
    this.store.dispatch(CriteriaActions.removeFavorite({ id }));
  }
}

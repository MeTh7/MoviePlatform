import { Injectable } from '@angular/core';

import { Criteria } from '../criteria/models/criteria.model';
import { Movie } from '../models/favorite-movie.model';

@Injectable({
  providedIn: 'root',
})
export class CriteriaResolverService {
  private readonly sortByMap: Record<
    'alphabet' | 'popularity' | 'critics',
    (a: Movie, b: Movie) => number
  > = {
    alphabet: (a: Movie, b: Movie) =>
      a.title > b.title ? 1 : a.title < b.title ? -1 : 0,
    popularity: (a: Movie, b: Movie) => b.popularity - a.popularity,
    critics: (a: Movie, b: Movie) => b.vote_average - a.vote_average,
  };

  resolve(movies: Movie[], criteria: Criteria): Movie[] {
    return this.resolveGenre(
      this.resolveFavoritesOnly(
        this.resolveSearchTitle(
          this.resolveOrder(movies, criteria.orderBy),
          criteria.searchTitle
        ),
        criteria.favoritesOnly
      ),
      criteria.genre || 0
    );
  }

  private resolveOrder(
    movies: Movie[],
    orderBy: 'alphabet' | 'popularity' | 'critics'
  ): Movie[] {
    return movies.sort(this.sortByMap[orderBy]);
  }

  private resolveSearchTitle(movies: Movie[], searchTitle: string): Movie[] {
    return searchTitle
      ? movies.filter(
          (movie) =>
            movie.title.toLowerCase().indexOf(searchTitle.toLowerCase()) > -1
        )
      : movies;
  }

  private resolveFavoritesOnly(
    movies: Movie[],
    favoritesOnly: boolean
  ): Movie[] {
    return favoritesOnly ? movies.filter((movie) => movie.favorite) : movies;
  }

  private resolveGenre(movies: Movie[], genre: number): Movie[] {
    return genre
      ? movies.filter((movie) => movie.genre_ids.indexOf(genre) > -1)
      : movies;
  }
}

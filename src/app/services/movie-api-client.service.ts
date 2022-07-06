import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { GenreResponse } from '../models/genre-response.model';
import { MovieResponse } from '../models/movie-response.model';

@Injectable({
  providedIn: 'root',
})
export class MovieApiClientService {
  constructor(private httpClient: HttpClient) {}

  getPlayingNow(): Observable<MovieResponse> {
    return this.httpClient.get<MovieResponse>(
      `${environment.movieApi}/movie/now_playing?region=DE&api_key=974b7d3bceda8c4ff0b52cc15e04bf52`
    );
  }

  getGenres(): Observable<GenreResponse> {
    return this.httpClient.get<GenreResponse>(
      `${environment.movieApi}/genre/movie/list?api_key=974b7d3bceda8c4ff0b52cc15e04bf52`
    );
  }
}

import { MovieDto } from './movie-response.model';

export interface Movie extends MovieDto {
  favorite: boolean;
}

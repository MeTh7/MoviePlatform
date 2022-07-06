//Struktur der Response wird definiert, damit der Json-String in Objekt umgewandelt werden kann.
//Alle Felder der API werden hier definiert.
export interface MovieResponse{
  page: number;
  results: Array<MovieDto>;
  dates: Dates;
  total_pages: number;
  total_results: number;
}

export interface MovieDto{
  poster_path: string|null; //|= Pipe > entweder String oder null
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>; //Ursprünglich: array[integer]
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string|null;
  popularity: number;
  vote_count:number;
  video: boolean;
  vote_average:number;
}

export interface Dates{
  maximum: string;
  minimum: string;
}


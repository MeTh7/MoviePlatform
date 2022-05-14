import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = "https://api.themoviedb.org/3/movie";

  constructor(private http: HttpClient) {
  }

  getNowPlaying(){
    return this.http.get(this.baseUrl + "/now_playing?api_key=974b7d3bceda8c4ff0b52cc15e04bf52&language=en-US&page=1&region=CH");
  }
}

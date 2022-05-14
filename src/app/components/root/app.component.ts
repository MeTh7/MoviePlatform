import { Component } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieResponse} from "../../models/MovieResponse";

//Konstruktor wird erstellt, um den MovieService injekten zu können.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Funktion wird erstellt, die den MovieService aufrufen kann.

export class AppComponent {

  nowPlayingResponse: MovieResponse|undefined; //Variable wurde erstellt, um die Antwort vom MovieService darin zu speichern

  constructor(private movieService: MovieService) {
    this.loadNowPlayingMovies();
  }

  //Funktion "loadNowPlayingMovies()" ruft "movieService" auf, welche die Liste der Filme aus der API aufruft.
  //"subscribe()" braucht es, da der Http-Call asynchron ist und überhaupt erst ausgeführt werden kann.
  //"subscribe" sagt: du bist interessiert am Resultat.
  //Im "subscribe" muss eine Funktion sein, die ausgeführt wird, sobald das Resultat gekommen ist.

  loadNowPlayingMovies() {
    this.movieService.getNowPlaying().subscribe(
      (result:MovieResponse) => this.nowPlayingResponse = result //Das ist die Funktion, die das Resultat auf der Konsole ausgibt.
    )
  }

}

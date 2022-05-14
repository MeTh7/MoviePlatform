import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieService} from "../../services/movie.service";

//Konstruktor wird erstellt, um den MovieService injekten zu können.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Funktion wird erstellt, die den MovieService aufrufen kann.

export class AppComponent {
  constructor(private movieService: MovieService) {
    this.loadNowPlayingMovies();
  }

  //Funktion "loadNowPlayingMovies()" ruft "movieService" auf, welche die Liste der Filme aus der API aufruft.
  //"subscribe()" braucht es, da der Http-Call asynchron ist und überhaupt erst ausgeführt werden kann.
  //"subscribe" sagt: du bist interessiert am Resultat.
  //Im "subscribe" muss eine Funktion sein, die ausgeführt wird, sobald das Resultat gekommen ist.

  loadNowPlayingMovies() {
    this.movieService.getNowPlaying().subscribe(
      result => console.log(result) //Das ist die Funktion, die das Resultat auf der Konsole ausgibt.
    )
  }

}

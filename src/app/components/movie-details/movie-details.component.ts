import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/MovieResponse";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie|undefined; // "Movie" in "MovieResponse

  constructor() { }

  ngOnInit(): void {
  }

}

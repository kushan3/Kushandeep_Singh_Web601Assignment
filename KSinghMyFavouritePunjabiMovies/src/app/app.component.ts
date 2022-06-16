import { Component } from '@angular/core';
import { Content } from './models/content';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KSinghMyFavouritePunjabiMovies';
  oneitem?: Content;

  constructor(private moviesService: MoviesService) {
  }
  ngOnInit(): void {
    this.moviesService.getOneContent(3).subscribe((contentArrayFromService: Content) => {
      this.oneitem = contentArrayFromService;
  })
  }
}




import { Component, Input } from '@angular/core';
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
  @Input() contentItem?: Content;

  constructor(private moviesService: MoviesService) {
  }
  getMovie(id:any){
    this.moviesService.getOneContent(id).subscribe((contentArrayFromService: Content) => {
      this.oneitem = contentArrayFromService;
  }) 
  }
  ngOnInit(): void {
    this.moviesService.getOneContent(4).subscribe((contentArrayFromService: Content) => {
      this.oneitem = contentArrayFromService;
  })
  }
}




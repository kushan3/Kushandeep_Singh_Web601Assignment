import { Component, OnInit } from '@angular/core';
import { Content } from "../models/content";
import {MoviesService} from "../services/movies.service";


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  title = 'KSinghMyFavouritePunjabiMovies';
   myList: Content[];
   
  constructor(private moviesService: MoviesService) {
this.myList =[];

}
  ngOnInit(): void {
    this.moviesService.getContent().subscribe((contentArrayFromService: Content[]) => {
      this.myList = contentArrayFromService;
  })
  }
}

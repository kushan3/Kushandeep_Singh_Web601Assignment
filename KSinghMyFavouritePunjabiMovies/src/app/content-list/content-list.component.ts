import { Component, OnInit } from '@angular/core';
import { Content } from "../models/content";


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  title = 'KSinghMyFavouritePunjabiMovies';
   myList: Content[];
  constructor() {
this.myList =[];

}
  ngOnInit(): void {

  }

}

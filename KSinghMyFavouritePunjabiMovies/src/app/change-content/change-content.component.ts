import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {
  contentItem: Content = {
    title: "",
    director: ""
  };
  tempTags: string = '';
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  addContentToServer(): void {
    this.contentItem.hashtag = this.tempTags.split(", ");
    this.moviesService.addContentItem(this.contentItem)
      .subscribe((newContentFromServer: any) =>
        console.log("Success! New content added", newContentFromServer)
      );
  }
  updateContentOnServer(): void {
    this.contentItem.hashtag = this.tempTags.split(", ");
    this.moviesService.updateContent(this.contentItem)
      .subscribe(() =>
        console.log("Content updated successfully", this.contentItem)
      );
  }

}
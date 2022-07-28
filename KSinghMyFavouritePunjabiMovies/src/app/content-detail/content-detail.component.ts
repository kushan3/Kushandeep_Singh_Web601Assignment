import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../models/content';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss'],
})
export class ContentDetailComponent implements OnInit {
  id?: number;
  contentItem?: Content;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id') ?? 0);

      this.moviesService.getContentItem(this.id).subscribe((contentItem) => {
        this.contentItem = contentItem;
      });
    });
  }
}

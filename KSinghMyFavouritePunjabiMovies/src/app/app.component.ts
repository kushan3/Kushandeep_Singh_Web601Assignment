import { Component, Input } from '@angular/core';
import { Content } from './models/content';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My_list';

  constructor() { }
}



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    ContentDetailComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

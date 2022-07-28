import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContentListComponent } from './content-list/content-list.component';
import { ChangeContentComponent } from './change-content/change-content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full",
  },
  
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "addContent",
    component: ChangeContentComponent
  },
{
  path: "detail/:id",
  component: ContentDetailComponent
},



];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContentListComponent } from './content-list/content-list.component';


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

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
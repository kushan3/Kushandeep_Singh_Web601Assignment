import { Injectable } from '@angular/core';
import {Content} from "../models/content";
import {Observable, of} from "rxjs";
import {MYLIST} from "../data/mock-content-db";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  getContent(): Observable<Content[]> {
    return of(MYLIST);
  }
  getOneContent(id: number): Observable<Content[]> {
    return of(MYLIST);
  }
  addContent(newContent: Content): Observable<Content[]> {
    return of(MYLIST);
  }
  updateContent(newContent: Content): Observable<Content[]> {
    return of(MYLIST);
  }
  removeContent(id: number): Observable<Content[]> {
    return of(MYLIST);
  }


}

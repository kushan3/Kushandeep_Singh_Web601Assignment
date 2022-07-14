import { Injectable } from '@angular/core';
import {Content} from "../models/content";
import {Observable, of} from "rxjs";
import {MYLIST} from "../data/mock-content-db";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };

  constructor(private http: HttpClient) { }
    getContent(): Observable<Content[]> {
     return this.http.get<Content[]>("/api/My_list");
  }
  getContentItem(id: number): Observable<Content> {
    console.log("Now getting it from the server!");
    return this.http.get<Content>("/api/My_list/" + id);
  }
  addContentItem(newContent: Content): Observable<Content> {
    return this.http.post<Content>("/api/chess", newContent, this.httpOptions)
  }
  updateContent(contentItem: Content): Observable<any> {
    return this.http.put<any>("api/My_list", contentItem, this.httpOptions);
  }
  removeContent(id: number): Observable<Content[]> {
    return of(MYLIST);
  }

}

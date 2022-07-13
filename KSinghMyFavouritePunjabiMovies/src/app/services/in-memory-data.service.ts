import { Injectable } from '@angular/core';
import { MYLIST } from '../data/mock-content-db';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const My_list: Content[] = MYLIST;
    return {
      My_list: My_list
    };
  }

  genId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(c => c.id || 0)) + 1 : 0;
  }
}



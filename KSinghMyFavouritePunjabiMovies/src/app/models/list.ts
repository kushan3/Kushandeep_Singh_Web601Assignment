import {Content} from "./content";

export class List {
  private readonly _items: Content[];
  constructor() {
    this._items = [];
  }
  get items():Content[] {
    return this._items;
  }

  addContent(oneitem: Content): void { // add content method that adds one item to the end of the array
    this._items.push(oneitem);
  }


  printProperties(index: number): string {
    if (this._items.length <= index || index < 0) {
      return `<h2>Error, invalid index requested: ${index}</h2>`;
    }
    return `<div class="content-wrapper">
              <h1>${this._items[index].title}</h1>
              <h2>${this._items[index].director}</h2>
              <h6>${this._items[index].author}</h6>
              <img src="${this._items[index].imageLink}">
              <div>${this._items[index].model}</div>
            </div>`;
  }
}

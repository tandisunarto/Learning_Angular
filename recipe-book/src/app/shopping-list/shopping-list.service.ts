import { Injectable } from '@angular/core';
import { Ingridient } from 'app/shared';

@Injectable()
export class ShoppingListService {
  private items: Ingridient[] = [];

  constructor() { }

  getItem(): Ingridient[] {
    return this.items;
  }

  addItems(items: Ingridient[]) {
    Array.prototype.push.apply(this.items, items);
  }
}

import { Component, OnInit } from '@angular/core';
import { Ingridient } from 'app/shared';
import { ShoppingListService } from 'app/shopping-list';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
  items: Ingridient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItem();
  }

}

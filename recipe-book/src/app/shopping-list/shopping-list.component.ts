import { Component, OnInit } from '@angular/core';
import { Ingridient } from 'app/shared';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
  items: Ingridient[] = [];

  constructor() { }

  ngOnInit() {
  }

}

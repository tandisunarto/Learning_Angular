import { Component, OnInit } from '@angular/core';
import { Seed, Product } from '../model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  products: Product[] = new Seed().products.sort( (a, b) => (b.votes - a.votes));

  constructor() { }

  ngOnInit() {
  }

  onUpVoteClicked(productId) {
    console.log(productId + ' was clicked in child componenet');
  }
}

import { Component, OnInit } from '@angular/core';
import { Seed, Product } from '../model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products = new Seed().products.sort( (a, b) => (b.votes - a.votes));
  }

  onUpVoteClicked(productId) {
    const updatedProducts = this.products.map(
      (product) => {
        if (product.id === productId) {
          return Object.assign(
            {},
            product,
            {
              votes: product.votes + 1
            }
          );
        } else {
          return product;
        }
      }
    );

    this.products = updatedProducts;
  }
}

import { Component, OnInit } from '@angular/core';
import { Seed, Product } from '../model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  Products: Product[] = new Seed().products;

  constructor() { }

  ngOnInit() {
  }

}

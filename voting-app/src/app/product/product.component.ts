import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

}

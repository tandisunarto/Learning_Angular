import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() upVoteClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onUpVoteClick(productId) {
    this.upVoteClicked.emit(productId);
  }
}

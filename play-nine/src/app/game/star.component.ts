import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styles: []
})
export class StarComponent implements OnInit {
  numberOfStars = [];

  constructor() {
    this.numberOfStars = _.range(0, Math.floor(Math.random() * 9) + 1);
  }

  ngOnInit() {
  }

}

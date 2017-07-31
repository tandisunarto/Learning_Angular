import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styles: []
})
export class StarComponent implements OnInit {

  numberOfStars = Math.floor(Math.random() * 9);
  stars = [];
  constructor() {
    for (let i = 0; i < this.numberOfStars ; i ++) {
      this.stars.push(i);
    }
  }

  ngOnInit() {
  }

}

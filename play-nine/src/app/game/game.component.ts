import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent implements OnInit {
  selectedNumbers: number[] = [];
  numberOfStars: number[] =  _.range(0, Math.floor(Math.random() * 9) + 1);

  ngOnInit() {
  }

  onNumberClicked(number) {
    if (this.selectedNumbers.indexOf(number) >= 0) {
      return;
    }
    this.selectedNumbers = this.selectedNumbers.concat(number);
  }

  onUnselecteNumberClicked(number) {
    this.selectedNumbers = this.selectedNumbers.filter((n) => n !== number);
  }

}

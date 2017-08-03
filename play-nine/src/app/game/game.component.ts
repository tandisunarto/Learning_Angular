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
  answerIsCorrect: boolean = null;
  usedNumbers: number[] = [4, 7];

  ngOnInit() {
  }

  onNumberClicked(number) {
    if (this.selectedNumbers.indexOf(number) >= 0 ||
        this.usedNumbers.indexOf(number) >= 0) {
      return;
    }
    this.answerIsCorrect = null;
    this.selectedNumbers = this.selectedNumbers.concat(number);
  }

  onUnselecteNumberClicked(number) {
    this.answerIsCorrect = null;
    this.selectedNumbers = this.selectedNumbers.filter((n) => n !== number);
  }

  onButtonClicked(answerIsCorrect: boolean) {
    this.answerIsCorrect = answerIsCorrect;
  }
}

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
  usedNumbers: number[] = [];
  redraws = 5;

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

  onButtonClicked(value) {
    this.answerIsCorrect = value.answerIsCorrect;
    if (value.answerIsFinal) {
      this.usedNumbers = this.usedNumbers.concat(this.selectedNumbers);
      this.selectedNumbers = [];
      this.numberOfStars =  _.range(0, Math.floor(Math.random() * 9) + 1);
      this.answerIsCorrect = null;
    }
  }

  onButtonRedrawClicked(value) {
    if (this.redraws > 0) {
      this.selectedNumbers = [];
      this.numberOfStars =  _.range(0, Math.floor(Math.random() * 9) + 1);
      this.answerIsCorrect = null;
      this.redraws--;
    }
    }
}

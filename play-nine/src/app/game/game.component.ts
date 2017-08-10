import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent implements OnInit {

  selectedNumbers: number[];
  numberOfStars: number[];
  answerIsCorrect: boolean;
  usedNumbers: number[];
  redraws: number;
  doneStatus: string;

  ngOnInit() {
    this.initiate();
  }

  initiate() {
    this.selectedNumbers = [];
    this.numberOfStars =  _.range(0, Math.floor(Math.random() * 9) + 1);
    this.answerIsCorrect = null;
    this.usedNumbers = [];
    this.redraws = 5;
    this.doneStatus = null;
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

  onResetGame(value) {
    this.initiate();
  }

  onButtonAcceptClicked(value) {
    this.answerIsCorrect = value.answerIsCorrect;
    if (value.answerIsFinal) {
      this.usedNumbers = this.usedNumbers.concat(this.selectedNumbers);
      this.selectedNumbers = [];
      this.numberOfStars =  _.range(0, Math.floor(Math.random() * 9) + 1);
      this.answerIsCorrect = null;

      this.updateDoneStatus();
    }
  }

  onButtonRedrawClicked(value) {
    if (this.redraws > 0) {
      this.selectedNumbers = [];
      this.numberOfStars =  _.range(0, Math.floor(Math.random() * 9) + 1);
      this.answerIsCorrect = null;
      this.redraws--;

      this.updateDoneStatus();
    }
  }

  updateDoneStatus() {
    if (this.usedNumbers.length === 9) {
      this.doneStatus = 'You Won! Good Job.';
    }
    if (this.redraws === 0 && !this.possibleSolutions()) {
      this.doneStatus = 'You Lost! Try Again.';
    }
  }

  possibleSolutions() {
    const possibleNumbers = _.range(1, 10).filter(number =>
      this.usedNumbers.indexOf(number) === -1
    );

    return this.possibleCombinationSum(possibleNumbers, this.numberOfStars);
  }

  possibleCombinationSum = function (arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return this.possibleCombinationSum(arr, n);
    }
    const listSize = arr.length;
    const combinationsCount = (1 << listSize);
    for (let i = 1; i < combinationsCount; i++) {
        let combinationSum = 0;
        for (let j = 0; j < listSize; j++) {
            if (i & (1 << j)) { combinationSum += arr[j]; }
        }
        if (n === combinationSum) { return true; }
    }
    return false;
  };
}

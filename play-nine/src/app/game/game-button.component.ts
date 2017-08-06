import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styles: []
})
export class GameButtonComponent implements OnInit, OnChanges {
  @Input() selectedNumbers: number[];
  @Input() numberOfStars: number;
  @Input() answerIsCorrect: boolean;
  @Input() redraws: number;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() buttonRedrawClicked: EventEmitter<any> = new EventEmitter<any>();

  btnAnswer: string;
  btnIcon: string;

  constructor() {
  }

  ngOnInit() {
  }

  onClicked() {
    let answerIsFinal = false;
    if (this.answerIsCorrect) {
      answerIsFinal = true;
    } else {
      this.answerIsCorrect = this.numberOfStars === this.selectedNumbers.reduce((acc, n) => acc + n, 0);
    }
    this.buttonClicked.emit({answerIsCorrect: this.answerIsCorrect, answerIsFinal: answerIsFinal});
  }

  onRedrawClicked() {
    this.buttonRedrawClicked.emit(null);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.answerIsCorrect === true) {
      this.btnAnswer = 'btn-success';
      this.btnIcon = 'fa fa-check';
    } else if (this.answerIsCorrect === false) {
      this.btnAnswer = 'btn-danger';
      this.btnIcon = 'fa fa-times';
    } else {
      this.btnAnswer = 'btn-default';
      this.btnIcon = 'fa fa-check';
    }
  }
}

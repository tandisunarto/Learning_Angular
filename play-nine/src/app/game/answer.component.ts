import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styles: []
})
export class AnswerComponent implements OnInit {

  @Input() selectedNumbers: number[] = [];
  @Output() numberClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onNumberClicked(number) {
    this.numberClicked.emit(number);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: []
})
export class NumbersComponent implements OnInit {
  @Input() selectedNumbers: number[] = [];
  @Input() usedNumbers: number[];
  @Output() numberClicked: EventEmitter<number> = new EventEmitter<number>();

  numbers = [];
  constructor() {
    this.numbers = _.range(1, 10);
   }

  ngOnInit() {
  }

  onNumberClick(number) {
    this.numberClicked.emit(number);
  }

  numberClassName(number): string {
    let className = 'none';
    if (this.usedNumbers.indexOf(number) >= 0) {
      className = 'used';
    } else if (this.selectedNumbers.indexOf(number) >= 0) {
      className = 'selected';
    }

    return className;
  }
}

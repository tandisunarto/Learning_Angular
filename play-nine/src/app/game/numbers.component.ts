import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: []
})
export class NumbersComponent implements OnInit {

  @Input() selectedNumbers: number[] = [];
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
}

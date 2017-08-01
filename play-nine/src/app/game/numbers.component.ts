import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: []
})
export class NumbersComponent implements OnInit {

  @Input() selectedNumbers: number[] = [];

  numbers = [];
  constructor() {
    this.numbers = _.range(1, 10);
   }

  ngOnInit() {
  }

}

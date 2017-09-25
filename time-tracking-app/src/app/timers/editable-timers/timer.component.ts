import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Helpers } from '../../helpers';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styles: []
})
export class TimerComponent implements OnInit {

  @Input() timer;
  @Output() actionButtonClick: EventEmitter<string> = new EventEmitter<string>();

  elapsedString: string;

  constructor() { }

  ngOnInit() {
    this.elapsedString = new Helpers().renderElapsedString(this.timer.elapsed, null);
  }

  onActionButtonClick(timerId) {
    this.actionButtonClick.emit(timerId);
  }

}

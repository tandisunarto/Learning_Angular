import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Helpers } from '../../helpers';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styles: []
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() timer;
  @Output() actionButtonClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() editButtonClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteButtonClick: EventEmitter<string> = new EventEmitter<string>();

  timerInterval;

  elapsedString: string;

  constructor() { }

  ngOnInit() {
    this.updateTimerInterval();
    if (this.timer.runningSince) {
      this.startTimerInterval();
    } else {
      this.stopTimerInterval();
    }
  }

  ngOnDestroy() {
    clearTimeout(this.timerInterval);
  }

  startTimerInterval() {
    this.timerInterval = setInterval(() => this.updateTimerInterval(), 100);
  }

  stopTimerInterval() {
    clearInterval(this.timerInterval);
  }

  updateTimerInterval() {
    this.elapsedString = new Helpers().renderElapsedString(this.timer.elapsed, this.timer.runningSince);
  }

  onActionButtonClick() {
     this.actionButtonClick.emit(this.timer.id);
  }

  onEditClick() {
    this.editButtonClick.emit(this.timer.id);
  }

  onDeleteClick() {
    this.deleteButtonClick.emit(this.timer.id);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimerSeed } from 'seed';

@Component({
  selector: 'app-editable-timer-list',
  templateUrl: './editable-timer-list.component.html',
  styles: []
})
export class EditableTimerListComponent implements OnInit {
  @Input() timers;
  @Output() updateClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionButtonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onActionButtonClick(timerId) {
    this.actionButtonClick.emit(timerId);
  }

  onUpdateClick(timer) {
    this.updateClicked.emit(timer);
  }

  onDeleteClick(timerId) {
    this.deleteClicked.emit(timerId);
  }
}

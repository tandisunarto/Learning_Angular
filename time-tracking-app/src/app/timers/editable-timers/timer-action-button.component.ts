import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-action-button',
  templateUrl: './timer-action-button.component.html',
  styles: []
})
export class TimerActionButtonComponent implements OnInit {

  @Input() timerId;
  @Output() actionButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() timerIsRunning;

  constructor() { }

  ngOnInit() { }

  onActionButtonClick() {
    this.actionButtonClick.emit();
  }

}

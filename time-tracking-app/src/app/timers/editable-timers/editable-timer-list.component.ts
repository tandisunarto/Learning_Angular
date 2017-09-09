import { Component, OnInit } from '@angular/core';
import { TimerSeed } from 'seed';

@Component({
  selector: 'app-editable-timer-list',
  templateUrl: './editable-timer-list.component.html',
  styles: []
})
export class EditableTimerListComponent implements OnInit {
  readonly timers: any[] = TimerSeed;

  constructor() { }

  ngOnInit() {
  }
}

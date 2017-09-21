import { Component, OnInit, Input } from '@angular/core';
import { TimerSeed } from 'seed';

@Component({
  selector: 'app-editable-timer-list',
  templateUrl: './editable-timer-list.component.html',
  styles: []
})
export class EditableTimerListComponent implements OnInit {
  @Input() timers;

  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { TimerSeed } from 'seed';
import { Helpers } from '../helpers';

@Component({
  selector: 'app-timers-dashboard',
  templateUrl: './timers-dashboard.component.html',
  styles: []
})
export class TimersDashboardComponent implements OnInit {

  timers: any[] = TimerSeed;

  constructor() { }

  ngOnInit() {
  }

  onCreateClicked(timer) {
    const newTimer = new Helpers().newTimer(timer);
    this.timers = this.timers.concat(newTimer);
  }

  onActionButtonClick(timerId) {
    console.log('TimersDashboardComponent: ' + timerId);
  }
}

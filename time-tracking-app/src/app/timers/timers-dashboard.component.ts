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
    this.timers = this.timers.map(
      (timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer,
          {
            elapsed: this.elapsedTime(timer),
            runningSince: this.runningSinceTime(timer)
          })
        } else {
          return timer;
        }
      }
    )
  }

  onUpdateClicked(timer) {
  }

  onDeleteClicked(timerId) {
    this.timers = this.timers.filter(
      (timer) => timer.id !== timerId
    );
  }

  elapsedTime(timer): number {
    if (timer.runningSince > 0) {
      return timer.elapsed + Date.now() - timer.runningSince
    } else {
      return timer.elapsed
    }
  }

  runningSinceTime(timer): number {
    return timer.runningSince > 0 ? 0 : Date.now();
  }
}

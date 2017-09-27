import { Injectable } from '@angular/core';
import { TimerModel } from 'app/models/timer'
import { TimerSeed } from 'seed'
import { Helpers } from 'app/helpers';

@Injectable()
export class SeedTimerService {

  timers: TimerModel[] = null;

  constructor() {
      this.timers = TimerSeed.map(t => <TimerModel>t);
  }

  getTimers(): TimerModel[] {
    return this.timers;
  }

  insertTimer(timer: TimerModel): TimerModel[] {
    const newTimer = new Helpers().newTimer(timer);
    this.timers = this.timers.concat(newTimer);
    return this.timers;
  }

  deleteTimer(timerId: any): TimerModel[] {
    this.timers = this.timers.filter(t => t.id !== timerId);
    return this.timers;
  }

  timerAction(timerId): TimerModel[] {
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
    );

    return this.timers;
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

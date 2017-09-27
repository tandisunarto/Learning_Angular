import { Component, OnInit } from '@angular/core';
import { TimerSeed } from 'seed';
import { Helpers } from '../helpers';
import { SeedTimerService } from 'app/services/seed-timer.service'
import { TimerModel } from 'app/models/timer'

@Component({
  selector: 'app-timers-dashboard',
  templateUrl: './timers-dashboard.component.html',
  styles: []
})
export class TimersDashboardComponent implements OnInit {

  timers: any[];

  constructor(private seedTimerService: SeedTimerService) { }

  ngOnInit() {
    this.timers = this.seedTimerService.getTimers();
  }

  onCreateClicked(timer) {
    this.timers = this.seedTimerService.insertTimer(timer);
  }

  onActionButtonClick(timerId) {
    this.timers = this.seedTimerService.timerAction(timerId);
  }

  onUpdateClicked(timer) {
  }

  onDeleteClicked(timerId) {
    this.timers = this.seedTimerService.deleteTimer(timerId);
  }
}

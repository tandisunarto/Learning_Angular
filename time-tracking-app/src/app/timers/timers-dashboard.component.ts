import { Component, OnInit } from '@angular/core';
import { TimerSeed } from 'seed';

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

}

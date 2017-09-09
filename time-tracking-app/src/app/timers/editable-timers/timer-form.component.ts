import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styles: []
})
export class TimerFormComponent implements OnInit {
  @Input() timer: any;

  constructor() { }

  ngOnInit() {
  }

}

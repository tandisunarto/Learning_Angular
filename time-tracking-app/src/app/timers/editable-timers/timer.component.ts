import { Component, OnInit, Input } from '@angular/core';
import { Helpers } from '../../helpers';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styles: []
})
export class TimerComponent implements OnInit {
  @Input() timer;
  elapsedString: string;

  constructor() { }

  ngOnInit() {
    // this.elapsedString = Helpers.renderElapsedString(this.timer.elapsed);
    console.log(Helpers);
  }

}

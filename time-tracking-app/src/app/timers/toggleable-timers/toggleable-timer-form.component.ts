import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggleable-timer-form',
  templateUrl: './toggleable-timer-form.component.html',
  styles: []
})
export class ToggleableTimerFormComponent implements OnInit {
  @Input() isOpen;

  constructor() { }

  ngOnInit() {
  }

}

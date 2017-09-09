import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editable-timer',
  templateUrl: './editable-timer.component.html',
  styles: []
})
export class EditableTimerComponent implements OnInit {
  @Input() timer: any;

  constructor() { }

  ngOnInit() {
  }

}

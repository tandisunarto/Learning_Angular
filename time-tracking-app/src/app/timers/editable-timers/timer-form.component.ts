import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as v4 from '../../../../node_modules/uuid/v4';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styles: []
})
export class TimerFormComponent implements OnInit {
  @Input() timer: any;
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() submitClicked: EventEmitter<any> = new EventEmitter<any>();

  submitText: string;

  constructor() { }

  ngOnInit() {
    this.submitText = this.timer == null ? 'Create' : 'Update';
    if (this.timer == null) {
      this.timer = {
        id: v4(),
        title: '',
        project: ''
      }
    }
  }

  onCancelClicked() {
    this.cancelClicked.emit();
  }

  onSubmitClicked() {
    console.log(this.timer);
    this.submitClicked.emit();
  }
}

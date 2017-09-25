import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-timer',
  templateUrl: './editable-timer.component.html',
  styles: []
})
export class EditableTimerComponent implements OnInit {
  @Input() timer: any;
  @Output() actionButtonClick: EventEmitter<string> = new EventEmitter<string>();
  editFormOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.editFormOpen = false;
  }

  onCancelClicked(p) {
    this.editFormOpen = false;
  }

  onActionButtonClick(timerId) {
    this.actionButtonClick.emit(timerId);
  }
}

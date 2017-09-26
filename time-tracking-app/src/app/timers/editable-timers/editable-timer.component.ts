import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-timer',
  templateUrl: './editable-timer.component.html',
  styles: []
})
export class EditableTimerComponent implements OnInit {
  @Input() timer: any;
  @Output() actionButtonClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteClick: EventEmitter<any> = new EventEmitter<any>();

  editFormOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.editFormOpen = false;
  }

  onCancelClicked(p) {
    this.editFormOpen = false;
  }

  onSubmitClicked(timer) {
    this.editFormOpen = false;
    this.updateClick.emit(timer);
  }

  onActionButtonClick(timerId) {
    this.actionButtonClick.emit(timerId);
  }

  onEditButtonClick(timerId) {
    this.editFormOpen = true;
  }

  onDeleteButtonClick(timerId) {
    this.editFormOpen = false;
    this.deleteClick.emit(timerId);
  }
}

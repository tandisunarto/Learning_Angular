import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggleable-timer-form',
  templateUrl: './toggleable-timer-form.component.html',
  styles: []
})
export class ToggleableTimerFormComponent implements OnInit {

  @Output() createClicked: EventEmitter<any> = new EventEmitter<any>();

  isOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.isOpen = false;
  }

  onOpenClick() {
    this.isOpen = true;
  }

  onCancelClicked() {
    this.isOpen = false;
  }

  onSubmitClicked(timer) {
    console.log('test')
    this.isOpen = false;
    this.createClicked.emit(timer);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggleable-timer-form',
  templateUrl: './toggleable-timer-form.component.html',
  styles: []
})
export class ToggleableTimerFormComponent implements OnInit {
  isOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.isOpen = false;
  }

  onOpenClick() {
    this.isOpen = true;
  }

  onCancelClicked(event: any) {
    this.isOpen = false;
  }

  onSubmitClicked(event: any) {
    this.isOpen = false;
  }

}

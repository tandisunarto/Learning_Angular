import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done-frame',
  templateUrl: './done-frame.component.html',
  styles: []
})
export class DoneFrameComponent implements OnInit {

  @Input() doneStatus;
  @Output() resetGame: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onResetGame() {
    this.resetGame.emit(null);
  }
}

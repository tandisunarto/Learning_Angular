import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div><button (click)='onClickedOne()'>Click One</button></div>
    <div><button (click)='onClickedTwo()'>Click Two</button></div>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  @Output() clickedTwo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onClickedOne() {
    alert('Click One is clicked');
  }
  onClickedTwo() {
    this.clickedTwo.emit('Click Two is clicked');
  }
}

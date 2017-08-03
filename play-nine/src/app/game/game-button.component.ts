import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styles: []
})
export class GameButtonComponent implements OnInit, OnChanges {

  @Input() selectedNumbers: number[];

  selected = 'true';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedNumbers.length);
  }
}

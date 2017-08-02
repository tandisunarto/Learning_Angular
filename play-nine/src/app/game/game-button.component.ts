import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styles: []
})
export class GameButtonComponent implements OnInit {

  @Input() selectedNumbers: number[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: []
})
export class GameComponent implements OnInit {
  state = {
    selectedNumbers: [3, 7]
  };

  constructor() { }

  ngOnInit() {
  }

}

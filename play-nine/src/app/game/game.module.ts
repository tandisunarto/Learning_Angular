import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { StarComponent } from './star.component';
import { AnswerComponent } from './answer.component';
import { GameButtonComponent } from './game-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameComponent,
    StarComponent,
    AnswerComponent,
    GameButtonComponent,
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }

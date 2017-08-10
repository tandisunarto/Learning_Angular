import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { StarComponent } from './star.component';
import { AnswerComponent } from './answer.component';
import { GameButtonComponent } from './game-button.component';
import { NumbersComponent } from './numbers.component';
import { DoneFrameComponent } from './done-frame.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameComponent,
    StarComponent,
    AnswerComponent,
    GameButtonComponent,
    NumbersComponent,
    DoneFrameComponent,
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }

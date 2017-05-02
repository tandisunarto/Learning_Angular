import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { HighlightDirective } from './highlight.directive';
import { MousehighlightDirective } from './mousehighlight.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    DirectivesComponent,
  ],
  declarations: [
    DirectivesComponent,
    HighlightDirective,
    MousehighlightDirective,
  ]
})
export class DirectivesModule { }

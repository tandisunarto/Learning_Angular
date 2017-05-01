import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    DirectivesComponent,
  ],
  declarations: [
    DirectivesComponent,
  ]
})
export class DirectivesModule { }

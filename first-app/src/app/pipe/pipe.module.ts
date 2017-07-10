import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoublePipe } from './double.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DoublePipe
  ]
})
export class PipeModule { }

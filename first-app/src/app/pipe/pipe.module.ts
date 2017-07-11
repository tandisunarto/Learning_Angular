import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplyPipe } from './multiply.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MultiplyPipe
  ],
  exports: [ 
    MultiplyPipe 
  ]
})
export class PipeModule { }

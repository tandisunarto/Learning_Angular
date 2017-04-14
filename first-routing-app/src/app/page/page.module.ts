import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { SecondPageComponent } from './second-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ ],
  declarations: [FirstPageComponent, SecondPageComponent]
})
export class PageModule { }

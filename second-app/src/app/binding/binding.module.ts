import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwowayComponent } from './twoway.component';
import { TwowayCounterComponent } from './twoway-counter.component';
import { TwowayEmployeeListComponent } from './twoway-employee-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TwowayComponent, TwowayCounterComponent, TwowayEmployeeListComponent]
})
export class BindingModule { }

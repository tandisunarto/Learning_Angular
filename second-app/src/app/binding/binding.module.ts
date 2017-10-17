import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwowayComponent } from './twoway.component';
import { TwowayCounterComponent } from './twoway-counter.component';
import { TwowayEmployeeListComponent } from './twoway-employee-list.component';
import { FormsModule } from '@angular/forms';
import { DummyComponent } from './dummy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TwowayComponent, TwowayCounterComponent, TwowayEmployeeListComponent, DummyComponent]
})
export class BindingModule { }

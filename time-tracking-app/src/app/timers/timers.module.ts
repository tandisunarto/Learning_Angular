import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimersDashboardComponent } from './timers-dashboard.component';
import { EditableTimerListComponent } from './editable-timers/editable-timer-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimersDashboardComponent, EditableTimerListComponent]
})
export class TimersModule { }

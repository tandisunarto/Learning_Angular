import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimersDashboardComponent } from './timers-dashboard.component';
import { EditableTimerListComponent } from './editable-timers/editable-timer-list.component';
import { ToggleableTimerFormComponent } from './toggleable-timers/toggleable-timer-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimersDashboardComponent,
    EditableTimerListComponent,
    ToggleableTimerFormComponent
  ],
  exports: [
    TimersDashboardComponent
  ]
})
export class TimersModule { }

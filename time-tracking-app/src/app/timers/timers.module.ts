import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimersDashboardComponent } from './timers-dashboard.component';
import { EditableTimerListComponent } from './editable-timers/editable-timer-list.component';
import { ToggleableTimerFormComponent } from './toggleable-timers/toggleable-timer-form.component';
import { TimerComponent } from './editable-timers/timer.component';
import { TimerFormComponent } from './editable-timers/timer-form.component';
import { EditableTimerComponent } from './editable-timers/editable-timer.component';
import { TimerActionButtonComponent } from './editable-timers/timer-action-button.component';
import { SeedTimerService } from 'app/services/seed-timer.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TimersDashboardComponent,
    EditableTimerListComponent,
    ToggleableTimerFormComponent,
    TimerComponent,
    TimerFormComponent,
    EditableTimerComponent,
    TimerActionButtonComponent,
  ],
  exports: [
    TimersDashboardComponent
  ],
  providers: [
    SeedTimerService
  ]
})
export class TimersModule { }

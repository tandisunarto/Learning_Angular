import { NgModule } from '@angular/core';
import { CurrentTrainingComponent, NewTrainingComponent, CompletedTrainingComponent, TrainingComponent } from './';

@NgModule({
  imports: [],
  declarations: [
    CurrentTrainingComponent, 
    NewTrainingComponent, 
    CompletedTrainingComponent,
    TrainingComponent
  ],
  exports: [
    CurrentTrainingComponent, 
    NewTrainingComponent, 
    CompletedTrainingComponent,
    TrainingComponent
  ]
})
export class TrainingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureService } from './temperature.service';
import { TemperatureComponent } from './temperature.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TemperatureComponent],
  declarations: [TemperatureComponent],
  providers: [TemperatureService]
})
export class TemperatureModule { }

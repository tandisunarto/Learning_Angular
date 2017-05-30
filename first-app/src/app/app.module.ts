import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BindingModule } from './binding/binding.module';

import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';
import { TemperatureModule } from 'app/services/temperature.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BindingModule,
    DirectivesModule,
    TemperatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

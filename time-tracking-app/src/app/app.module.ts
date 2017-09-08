import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimersModule } from 'app/timers/timers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

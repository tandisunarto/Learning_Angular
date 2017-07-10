import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BindingModule } from './binding/binding.module';

import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';
import { TemperatureModule } from 'app/services/temperature.module';
import { HeaderComponent } from './header.component';
import { AdminModule } from 'app/admin/admin.module';

// *** fewer lines of codes option for routing ***
import { routing } from 'app/learn-routing.module';

// *** this is another option for routing ***
import { LearnRoutingModule } from 'app/learn-routing.module';
import { PipeModule } from 'app/pipe/pipe.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BindingModule,
    DirectivesModule,
    TemperatureModule,
    AdminModule,
    PipeModule,
    routing, // *** fewer lines of codes option for routing ***
    // LearnRoutingModule // *** this is another option for routing ***
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }

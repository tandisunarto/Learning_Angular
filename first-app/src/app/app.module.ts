import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BindingModule } from './binding/binding.module';

import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';
import { TemperatureModule } from 'app/services/temperature.module';
import { HeaderComponent } from './header.component';
import { AdminComponent } from './admin/admin.component';
import { LearnRoutingModule } from 'app/learn-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BindingModule,
    DirectivesModule,
    TemperatureModule,
    LearnRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { EventPropertyBindingComponent } from './event-property-binding.component';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventPropertyBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
  ],
  exports :[
    EventPropertyBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
  ]
})
export class BindingModule { }

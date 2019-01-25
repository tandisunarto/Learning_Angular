import { NgModule } from '@angular/core';
import { LoginComponent, SignupComponent } from './';

@NgModule({
  imports: [],
  declarations: [
    LoginComponent, 
    SignupComponent
  ],
  exports: [
    LoginComponent, 
    SignupComponent
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'app/admin/admin.component';
import { UserComponent } from 'app/admin/user.component';
import { LearnRoutingModule } from 'app/learn-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LearnRoutingModule
  ],
  declarations: [
    AdminComponent,
    UserComponent
  ]
})
export class AdminModule { }

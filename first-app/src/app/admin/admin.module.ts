import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'app/admin/admin.component';
import { UserComponent } from 'app/admin/user.component';
import { LearnRoutingModule } from 'app/learn-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { UserEditComponent } from './user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    LearnRoutingModule
  ],
  declarations: [
    AdminComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent
  ]
})
export class AdminModule { }

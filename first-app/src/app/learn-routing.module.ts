import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from 'app/admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'admin', component: AdminComponent}
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class LearnRoutingModule { }

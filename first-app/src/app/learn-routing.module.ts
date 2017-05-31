import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'app/admin/admin.component';

const APP_ROUTES: Routes = [
  {path: 'admin', component: AdminComponent}
];

// *** fewer lines of codes option for routing ***
export const routing = RouterModule.forRoot(APP_ROUTES);

// *** this is another option for routing ***
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LearnRoutingModule { }

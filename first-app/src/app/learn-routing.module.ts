import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'app/admin/admin.component';
import { UserComponent } from 'app/admin/user.component';
import { USER_ROUTES } from 'app/admin/user.route';

const APP_ROUTES: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
  { path: '**', redirectTo: 'user/99', pathMatch: 'full' },
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

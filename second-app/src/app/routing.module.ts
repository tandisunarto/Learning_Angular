import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwowayComponent } from './binding/twoway.component';

const appRoutes: Routes = [
  { path: 'twoway', component: TwowayComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

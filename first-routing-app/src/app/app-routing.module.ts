import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from "app/page/first-page.component";
import { SecondPageComponent } from "app/page/second-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'firstpage'
  },
  {
    path: 'firstpage',
    children: [],
    component: FirstPageComponent
  },
  {
    path: 'secondpage',
    children: [],
    component: SecondPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

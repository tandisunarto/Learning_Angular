import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from 'app/template-driven/template-driven.component';
import { Routes, RouterModule } from '@angular/router';
import { DataDrivenComponent } from 'app/data-driven/data-driven.component';


export const APP_ROUTES: Routes = [
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'data-driven', component: DataDrivenComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouteModule { }

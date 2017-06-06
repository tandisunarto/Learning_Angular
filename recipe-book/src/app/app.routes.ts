import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from 'app/recipes';
import { ShoppingListComponent } from 'app/shopping-list';
import { NgModule } from '@angular/core';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutesModule {
}

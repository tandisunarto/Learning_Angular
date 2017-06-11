import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from 'app/recipes';
import { ShoppingListComponent } from 'app/shopping-list';
import { NgModule } from '@angular/core';
import { RECIPES_ROUTES } from 'app/recipes/recipes.routes';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: RECIPES_ROUTES },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutesModule {
}

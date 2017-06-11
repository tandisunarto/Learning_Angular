import { Routes } from '@angular/router';
import { RecipeStartComponent } from 'app/recipes/recipe-start.component';
import { RecipeEditComponent } from 'app/recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from 'app/recipes/recipe-detail';

export const RECIPES_ROUTES: Routes = [
  { path: '', component: RecipeStartComponent },
  { path: 'new', component: RecipeEditComponent },
  { path: ':id', component: RecipeDetailComponent },
  { path: ':id/edit', component: RecipeEditComponent },
];

export class Recipes {
}

import { Injectable } from '@angular/core';
import { Recipe } from 'app/recipes/recipe';
import { Ingridient } from 'app/shared';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'https://bigoven-res.cloudinary.com/image/upload/main---wiener-schnitzel-8f03d26e1f0f2601215a7029.jpg',
    [
      new Ingridient('French Fries', 2),
      new Ingridient('Pork', 1),
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg',
    [
      new Ingridient('Lettuce', 1),
      new Ingridient('Avocado', 1),
      new Ingridient('Tomato', 1),
      new Ingridient('Dressing', 1),
    ]),
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe, 1));
  }
}

import { Injectable } from '@angular/core';
import { Recipe } from "app/recipes/recipe";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'https://bigoven-res.cloudinary.com/image/upload/main---wiener-schnitzel-8f03d26e1f0f2601215a7029.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', []),
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/recipes/recipe';
import { ShoppingListService } from 'app/shopping-list';
import { Router } from '@angular/router';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  private recipeIndex: number = 1;

  constructor(private shoppingListService: ShoppingListService, private router: Router) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingridients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.router.navigate(['/recipes']);
  }
}

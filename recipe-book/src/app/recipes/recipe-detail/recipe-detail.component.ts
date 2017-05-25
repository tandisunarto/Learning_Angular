import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/recipes/recipe';
import { ShoppingListService } from 'app/shopping-list';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingridients);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header.component';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipesComponent } from './recipes';
import { RecipeListComponent,  RecipeItemComponent } from './recipes/recipe-list';
import { RecipeDetailComponent } from './recipes/recipe-detail';
import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from 'app/recipes';
import { ShoppingListService, ShoppingListComponent, ShoppingListAddComponent } from 'app/shopping-list';

@NgModule({
  declarations: [
    RecipeBookComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [RecipeBookComponent]
})
export class AppModule { }

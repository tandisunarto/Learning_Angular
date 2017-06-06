import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header.component';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeService, RecipesComponent } from './recipes';
import { RecipeListComponent,  RecipeItemComponent } from './recipes/recipe-list';
import { RecipeDetailComponent } from './recipes/recipe-detail';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListComponent, ShoppingListAddComponent, ShoppingListService } from './shopping-list';
import { AppRoutesModule } from 'app/app.routes';

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
    HttpModule,
    AppRoutesModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [RecipeBookComponent]
})
export class AppModule { }

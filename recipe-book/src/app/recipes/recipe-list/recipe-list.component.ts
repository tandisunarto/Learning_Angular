import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe: Recipe = new Recipe('Dummy','Dummy','http://i698.photobucket.com/albums/vv348/sanaka_sw/SMILE.jpg');

  constructor() { }

  ngOnInit() {
  }

}

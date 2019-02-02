import { Component, OnInit} from '@angular/core';
import { allrecipes } from './../recipes.model';
import { RecipeService } from './../../shared/service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class recipeListComponent implements OnInit {
  recipeList: allrecipes [];

  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipeList = this.recipeService.getRecipe();
  }
  
}

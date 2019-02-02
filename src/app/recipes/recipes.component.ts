import { Component, OnInit } from '@angular/core';
import { allrecipes } from './recipes.model';
import { RecipeService } from './../shared/service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class recipesComponent implements OnInit {

  selectedRecipe: allrecipes;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipeList:allrecipes) => {
        this.selectedRecipe = recipeList;
      }
    );
  }

}

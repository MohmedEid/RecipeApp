import { allrecipes } from './../../recipes/recipes.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<allrecipes>();

  private recipeList: allrecipes [] = [
    new allrecipes('Instant Pot® Salisbury Steak', 'Next time you are craving Salisbury steak like mom used to make, you can cook it in your…','../../../assets/img/recipe/2.jpg' ),
    new allrecipes('Slow Cooker Lasagna', 'Start with a skillet and finish with a slow cooker. A saute of onion, garlic and ground beef is…','../../../assets/img/recipe/3.jpg' ),
    new allrecipes('Slow Cooker', 'Start with a skillet and finish with a slow cooker. A saute of onion, garlic and ground beef is…','../../../assets/img/recipe/1.jpg' ),
  ];
  getRecipe(){
    return this.recipeList.slice();
  }

}

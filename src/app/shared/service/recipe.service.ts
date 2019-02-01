import { allRecpies } from './../../recpies/recpies.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<allRecpies>();

  private recpieList: allRecpies [] = [
    new allRecpies('Instant Pot® Salisbury Steak', 'Next time you are craving Salisbury steak like mom used to make, you can cook it in your…','../../../assets/img/recipe/2.jpg' ),
    new allRecpies('Slow Cooker Lasagna', 'Start with a skillet and finish with a slow cooker. A saute of onion, garlic and ground beef is…','../../../assets/img/recipe/3.jpg' ),
    new allRecpies('Slow Cooker', 'Start with a skillet and finish with a slow cooker. A saute of onion, garlic and ground beef is…','../../../assets/img/recipe/1.jpg' ),
  ];
  getRecipe(){
    return this.recpieList.slice();
  }

}

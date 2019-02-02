import { RecipeService } from './../../../shared/service/recipe.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { allrecipes } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class recipeItemComponent implements OnInit {
  
  @Input()
  i: allrecipes;

  constructor(private recipeService:RecipeService) { }
  onItemSelected(){
    this.recipeService.recipeSelected.emit(this.i)
  }


  ngOnInit() {
  }

}

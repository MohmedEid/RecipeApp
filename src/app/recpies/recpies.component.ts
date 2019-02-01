import { Component, OnInit } from '@angular/core';
import { allRecpies } from './recpies.model';
import { RecipeService } from './../shared/service/recipe.service';

@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css'],
  providers: [RecipeService]
})
export class RecpiesComponent implements OnInit {

  selectedRecipe: allRecpies;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recpieList:allRecpies) => {
        this.selectedRecipe = recpieList;
      }
    );
  }

}

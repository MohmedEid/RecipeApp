import { Component, OnInit} from '@angular/core';
import { allRecpies } from './../recpies.model';
import { RecipeService } from './../../shared/service/recipe.service';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  recpieList: allRecpies [];

  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recpieList = this.recipeService.getRecipe();
  }
  
}

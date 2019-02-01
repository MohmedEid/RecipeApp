import { RecipeService } from './../../../shared/service/recipe.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { allRecpies } from '../../recpies.model';

@Component({
  selector: 'app-recpie-item',
  templateUrl: './recpie-item.component.html',
  styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
  
  @Input()
  i: allRecpies;

  constructor(private recipeService:RecipeService) { }
  onItemSelected(){
    this.recipeService.recipeSelected.emit(this.i)
  }


  ngOnInit() {
  }

}

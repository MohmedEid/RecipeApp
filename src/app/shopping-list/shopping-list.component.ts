import { Component, OnInit } from '@angular/core';
import { AllIngredient } from './../shared/ingredient.model';
import { ShoppingService } from './../shared/service/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredientsList: AllIngredient[];
  constructor(private shoppingListService :ShoppingService) { }

  ngOnInit() {
    this.ingredientsList = this.shoppingListService.getIng();
    this.shoppingListService.ingSelected.subscribe(
      (newIng: AllIngredient[])=>{
        this.ingredientsList = newIng;
      })
  }

}

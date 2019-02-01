import { EventEmitter } from '@angular/core';
import { AllIngredient } from '../ingredient.model';

export class ShoppingService {
    ingSelected = new EventEmitter<AllIngredient[]>();
    private ingredientsList: AllIngredient[] = [
        new AllIngredient('Apples', 6),
        new AllIngredient('Apples', 5),
        new AllIngredient('Apples', 7),
    ];
    getIng(){
        return this.ingredientsList.slice()
    }
    onIngAdded(newIng: AllIngredient){
        this.ingredientsList.push(newIng);
        this.ingSelected.emit(this.ingredientsList.slice())
    }

}

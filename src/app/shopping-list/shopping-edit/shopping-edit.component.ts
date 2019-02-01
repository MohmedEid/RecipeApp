import { AllIngredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ShoppingService } from 'src/app/shared/service/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  onAddItem(){
    let ingName = this.nameInputRef.nativeElement.value;
    let ingAmout = this.amountInputRef.nativeElement.value;
    let newIng = new AllIngredient(ingName, ingAmout)
  }

  constructor(private shoppingListService: ShoppingService) { }

  ngOnInit() {
  }

}

import { ShoppingService } from 'src/app/shared/service/shopping.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { recipesComponent } from './recipes/recipes.component';
import { recipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { recipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { recipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    recipesComponent,
    recipeListComponent,
    recipeItemComponent,
    recipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

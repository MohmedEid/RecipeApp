import { ShoppingService } from 'src/app/shared/service/shopping.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { RecpieListComponent } from './recpies/recpie-list/recpie-list.component';
import { RecpieItemComponent } from './recpies/recpie-list/recpie-item/recpie-item.component';
import { RecpieDetailsComponent } from './recpies/recpie-details/recpie-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecpiesComponent,
    RecpieListComponent,
    RecpieItemComponent,
    RecpieDetailsComponent,
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

import { Component, OnInit, Input } from '@angular/core';
import { allrecipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class recipeDetailsComponent implements OnInit {


  @Input() recipeDetails: allrecipes;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { allRecpies } from '../recpies.model';

@Component({
  selector: 'app-recpie-details',
  templateUrl: './recpie-details.component.html',
  styleUrls: ['./recpie-details.component.css']
})
export class RecpieDetailsComponent implements OnInit {


  @Input() recipeDetails: allRecpies;

  constructor() { }

  ngOnInit() {
  }

}

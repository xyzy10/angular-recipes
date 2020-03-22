import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit, AfterViewChecked {
  @Input() recipe:Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    console.log(this.recipe);
  }

  
}

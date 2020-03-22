import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Item 1', 'This is item description.', 'http://www.thedefineddish.com/wp-content/uploads/2019/12/2019-12-28-22.37.12.jpg'),
    new Recipe('Test Item 2', 'This is item description.', 'http://www.thedefineddish.com/wp-content/uploads/2019/12/2019-12-28-22.37.12.jpg')
  ];

  @Output('selectedRecipe') recipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeItemClick(data: Recipe) {
    this.recipe.emit(data);
  }
}

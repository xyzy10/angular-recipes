import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  navLink: string = 'recipe';

  onNavClicked(data: {navLink}) {
    this.navLink = data.navLink;
  }

  isRecipeClicked() {
    return this.navLink === 'recipe';
  }
}
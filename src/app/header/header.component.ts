import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output('navClicked') navClick = new EventEmitter<{navLink}>();

  constructor() {}

  onNavClick(navLink: string) {
    this.navClick.emit({
      navLink
    });
  }
}
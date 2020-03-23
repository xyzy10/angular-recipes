import { Directive, Input, OnInit, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input() expand:string = '';
  toggleClass: string = 'open';
  
  @HostBinding('class') cssClass: string = this.toggleClass; // the user input.

  @HostListener('click') click (eventData: Event) {
    this.cssClass = (this.cssClass.length) ? '' : this.toggleClass;
  }

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Setup default behavior with input state.
    this.cssClass = Boolean(this.expand) ? this.toggleClass : '';
  }
}
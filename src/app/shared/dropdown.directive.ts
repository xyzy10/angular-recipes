import { Directive, Input, OnInit, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input() expand:string = '';
  toggleClass: string = 'open';
  
  @HostBinding('class') cssClass: string = this.toggleClass; // CSS Class output.

  @HostListener('click') click (eventData: Event) {
    this.cssClass = (this.cssClass.length) ? '' : this.toggleClass; // Toggle Class
  }

  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
    // Setup default behavior with input state.
    this.cssClass = Boolean(this.expand) ? this.toggleClass : '';
  }
}
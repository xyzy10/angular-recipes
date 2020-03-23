import { Directive, Input, OnInit, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input() state:string = '';
  defaultClass: string = 'open';
  isOpen: boolean = false;


  // @HostBinding()

  @HostListener('click') click (eventData: Event) {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.eleRef.nativeElement, this.defaultClass);
    } else {
      this.renderer.removeClass(this.eleRef.nativeElement, this.defaultClass);
    }
  }

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.state === this.defaultClass) {
      this.isOpen = true;
      this.renderer.addClass(this.eleRef.nativeElement, this.defaultClass);
    }
  }

  
}
import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor( private el: ElementRef) { }
  @HostListener('window:scroll', ['$event']) onMouseMove(event: any) {
    const elem = this.el.nativeElement;
    const header = document.getElementById('header');
    if (header ) {
     const headerHeight = header.offsetHeight;
     if ( window.scrollY > headerHeight) {
       elem.classList.add('active');
     } else {
       elem.classList.remove('active');
     }
   }
  }
}

import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appEffect]'
})
export class EffectDirective {
  public textElement?: HTMLElement;

  constructor( private el: ElementRef) {
    this.textElement = el.nativeElement;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    if (this.textElement) {
      const angle = 20;
      const rect = this.textElement.getBoundingClientRect();

      const half_w = rect.width / 2;
      const half_y = rect.height / 2;

      const x = (event.clientX - rect.left - half_w) / half_w;
      const y = (event.clientY - rect.top - half_y) / half_y;

      this.textElement.style.transform = `perspective(1000px) rotateX(${y * angle}deg) rotateY(${-x * angle}deg) scale3d(1,1,1)`;
    }
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: any) {
    if (this.textElement) {
     this.textElement.style.transform = '';
   }
  }
}

import {Directive, ElementRef, Input, OnInit} from '@angular/core';


@Directive({
  selector: '[appAnime]'
})
export class AnimeDirective implements OnInit {
  public isCounterAnimCalled = true;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const target = this.elementRef.nativeElement;

      const scrollImations = (entries: any, observer: any) => {
        entries.forEach((entry: any) => {
          if(entry.isIntersecting && entry.intersectionRatio == 1 && this.isCounterAnimCalled && target) {
              target.classList.add('active');
              this.isCounterAnimCalled = false;
          }
        });
      }
      const options = {
        threshold: 1.0,
      };
      const observer = new IntersectionObserver(scrollImations, options);
      if(target) {
        observer.observe(target);
      }
    }

}

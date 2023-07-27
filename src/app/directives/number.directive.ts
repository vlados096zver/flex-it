import {Directive, ElementRef, Input, OnInit} from '@angular/core';


@Directive({
  selector: '[appNumber]'
})
export class NumberDirective implements OnInit {
  public isCounterAnimCalled = true;
  @Input() count: any;
  @Input() elemClass: any;
  constructor(private elementRef: ElementRef) {}

  public counterAnim = (start = 0, end: number, duration = 1000) => {
    const target = this.elementRef.nativeElement;
    if (target) {
      let startTimestamp:any = null;
      const step = (timestamp: any) => {
        if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          target.innerText = Math.floor(progress * (end - start) + start).toLocaleString();
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
    }
  };

  ngOnInit() {
    const scrollImations = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if(entry.isIntersecting && entry.intersectionRatio == 1 && this.isCounterAnimCalled) {
          this.counterAnim(0, this.count, 1000);
          this.isCounterAnimCalled = false;
        }
      });
    }
    const options = {
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(scrollImations, options);
    const box = document.querySelector('.' + this.elemClass);
    if(box) {
      observer.observe(box);
    }
  }

}

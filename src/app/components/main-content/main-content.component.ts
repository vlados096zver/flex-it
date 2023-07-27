import {Component, ElementRef, Input, NgZone, ViewChild} from '@angular/core';
import {IAbout, IBlog, IClient, INumber, IPlan, IPortfolio, IServices, IWhy} from "../../models/data.model";
import {services} from "../../data/services";
import {about} from "../../data/about";
import {why} from "../../data/why";
import {number} from "../../data/number";
import {client} from "../../data/client";
import {SwiperOptions} from "swiper";
import {plan} from "../../data/plan";
import {portfolio} from "../../data/porfolio";
import {blog} from "../../data/blog";
import {SwiperComponent} from "swiper/angular";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  @Input() data$: any;
  showVideo = false;
  @ViewChild('swiperGallery', { static: false }) swiperGallery?: SwiperComponent;
  count: any = 1;
  showPopupGallery = false;
  services: IServices[] = services;
  about: IAbout[] = about;
  why: IWhy[] = why;
  number: INumber[] = number;
  client: IClient[] = client;
  plan: IPlan[] = plan;
  portfolio: IPortfolio[] = portfolio;
  blog: IBlog[] = blog;

  tabs = ['All', 'Mobile', 'Web Apps', 'Data Analaysis', 'Hosting'];
  activeTab = 0;

  changeState(state: number) {
    this.activeTab = state;
  }

  configClient: SwiperOptions = {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30
      },
    }
  };

  configTestmonials: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
  };

  configGallery: SwiperOptions = {
    loop: false,
    slidesPerView: 1,
  };

  onSwiper(event: any) {
    this.ngZone.run(() => {
      this.count = this.swiperGallery?.swiperRef.activeIndex;
      this.count++
    })
  }

  openPopupGallery(index: number) {
      this.showPopupGallery = true;
      console.log(index)
      this.swiperGallery?.swiperRef.slideToLoop(index, 0);
     this.animateGallery(index);
  }

  animateGallery(index: number) {
     setTimeout(() => {
       let selectImg:HTMLElement | null = document.querySelector(`.portfolio__elem${index}`);
       let slideActive: HTMLElement | null = document.querySelector(`.popup-gallery__image${index}`);

       if(selectImg && slideActive) {
         let from = selectImg.getBoundingClientRect();
         let to = slideActive.getBoundingClientRect();

         let w = from.width / to.width;
         let h = from.height / to.height;
         let t = from.top - to.top;
         let l = from.left - to.left;
         slideActive.style.transform = `translate(${l}px, ${t}px) scale(${w}, ${h})`;
         slideActive.style.transformOrigin = '0 0';
       }
       setTimeout(() => {
         if( slideActive) {
           slideActive.style.transition = 'all .5s ease-out';
           slideActive.style.transform = `translate(0, 0) scale(1, 1)`;
         }
           setTimeout(() => {
             if(slideActive) {
               slideActive.style.transition = ''
             }
           }, 600)
        }, 10)

     })
  }


  constructor(
    public ngZone: NgZone,
    public elementRef: ElementRef
  ) {
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  showPopupVideo(){
    this.showVideo = ! this.showVideo;
  }

  ngOnInit() {
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
  }
}

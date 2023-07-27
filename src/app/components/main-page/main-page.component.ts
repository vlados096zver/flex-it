import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {RequestsService} from "../../service/requests.service";
import {forkJoin} from "rxjs";
import {SwiperComponent} from "swiper/angular";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  public data$: any = [];
  constructor(
    public elementRef: ElementRef,
    public requestsService: RequestsService
  ) {
    forkJoin([
      this.requestsService.getTodos(),
      this.requestsService.getBlogPost(),
    ]).subscribe({
      next: (res: any)=> {
        this.data$ = res;
      }
    })
  }
}

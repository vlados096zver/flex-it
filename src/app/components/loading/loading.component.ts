import { Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public value: any = 'string';
  public percentage = 0;
  constructor(public el: ElementRef) {
  }
  ngOnInit() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressLine = document.getElementById('progress-line');
    const topBar = document.getElementById('top-bar');
    const downBar = document.getElementById('down-bar');

    let LoadingCounter = setInterval(()=> {
      if (this.percentage <= 100) {
        this.value = this.percentage + "%";
        if (loadingScreen && progressLine && topBar && downBar) {
         loadingScreen.style.opacity = `${100 - this.percentage}`;
          progressLine.style.transform = `scale(${this.percentage / 100})`;
          const value = (100 - this.percentage) / 2;
          topBar.style.width = `${value}%`;
          downBar.style.width = `${value}%`;
        }
        this.percentage++;
      } else {
        clearInterval(LoadingCounter);
      }
    }, 10);
  }
}

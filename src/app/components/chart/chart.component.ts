import {Component, Input, OnInit} from '@angular/core';
import {ParticlesConfig} from "../../models/particles-config";
declare let particlesJS: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() data$: any;

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig);
  }

  ngOnInit() {
    if(this.data$.length > 0) {
      const parentElem = document.getElementById('particles-js');
      const canvasElem = document.getElementById('canvas-el');
      if(parentElem  && canvasElem) {
          this.invokeParticles()
      }
    }
  }
}

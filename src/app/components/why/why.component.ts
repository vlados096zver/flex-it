import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent {
  @Input() item: any;
}

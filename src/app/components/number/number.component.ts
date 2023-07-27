import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  @Input() item: any;
  @Input() index: any;
}

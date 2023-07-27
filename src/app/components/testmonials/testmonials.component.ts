import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-testmonials',
  templateUrl: './testmonials.component.html',
  styleUrls: ['./testmonials.component.scss']
})
export class TestmonialsComponent {
  @Input() item: any;
}

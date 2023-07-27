import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-line',
  templateUrl: './input-line.component.html',
  styleUrls: ['./input-line.component.scss']
})
export class InputLineComponent {
  @Input() name = '';
  @Input() control = new FormControl(null);
  @Input() submitted = false;
}

import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent {
  @Input() name = '';
  @Input() control = new FormControl(null);
  @Input() submitted = false;
}

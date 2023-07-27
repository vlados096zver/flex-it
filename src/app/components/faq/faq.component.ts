import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  @Input() item: any;
  openDetails(item: any): void {
    item.isOpen = !item.isOpen;
  }
}

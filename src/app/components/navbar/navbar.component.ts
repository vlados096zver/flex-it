import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() tabs?: string[];
  @Input() activeTab = 0;
  @Output() activeTabChange = new EventEmitter<number>();
  onTabChange(index: number) {
    this.activeTabChange.emit(index);
  }
}

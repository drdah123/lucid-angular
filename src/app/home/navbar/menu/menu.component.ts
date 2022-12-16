import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() isMenuClicked: boolean = false;
  @Output() setIsMenuClickedEmit = new EventEmitter();

  isClicked = false;

  setIsMenuClicked() {
    this.setIsMenuClickedEmit.emit();
  }
  setIsClicked() {
    this.isClicked = !this.isClicked;
  }
}

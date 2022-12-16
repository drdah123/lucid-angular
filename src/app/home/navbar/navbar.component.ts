import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuClicked = false;

  setIsMenuClicked() {
    this.isMenuClicked = !this.isMenuClicked;
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScroll = window.scrollY;
    let menu = document.querySelector('.navbar');

    if (currentScroll > 50) {
      menu?.classList.add('navbar-scrolled');
    } else {
      menu?.classList.remove('navbar-scrolled');
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [NavbarComponent, MenuComponent],
  imports: [CommonModule, MatIconModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}

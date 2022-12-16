import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareCarsCardComponent } from './compare-cars-card/compare-cars-card.component';
import { CompareCarsComponent } from './compare-cars.component';

@NgModule({
  declarations: [CompareCarsCardComponent, CompareCarsComponent],
  imports: [CommonModule],
  exports: [CompareCarsComponent],
})
export class CompareCarsModule {}

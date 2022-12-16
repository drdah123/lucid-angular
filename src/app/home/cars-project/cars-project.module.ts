import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsProjectComponent } from './cars-project.component';
import { SwiperModule } from 'swiper/angular';
import { CarCardProjectComponent } from './car-card-project/car-card-project.component';
@NgModule({
  declarations: [CarsProjectComponent, CarCardProjectComponent],
  imports: [CommonModule, SwiperModule],
  exports: [CarsProjectComponent],
})
export class CarsProjectModule {}

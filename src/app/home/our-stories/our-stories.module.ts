import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { OurStoriesComponent } from './our-stories.component';
import { CardStoriesComponent } from './card-stories/card-stories.component';

@NgModule({
  declarations: [OurStoriesComponent, CardStoriesComponent],
  imports: [CommonModule, SwiperModule],
  exports: [OurStoriesComponent],
})
export class OurStoriesModule {}

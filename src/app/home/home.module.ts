import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';
import { CarsProjectModule } from './cars-project/cars-project.module';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { OurStoriesModule } from './our-stories/our-stories.module';
import { NewsLetterModule } from './news-letter/news-letter.module';
import { CompareCarsModule } from './compare-cars/compare-cars.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [HomeComponent, BannerComponent, OurVisionComponent],
  imports: [
    CommonModule,
    CarsProjectModule,
    OurStoriesModule,
    NewsLetterModule,
    CompareCarsModule,
    FooterModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}

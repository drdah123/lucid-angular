import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Car } from 'src/app/Types/cars';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper modules
import { CarsProjectService } from './cars-project.service';

SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-cars-project',
  templateUrl: './cars-project.component.html',
  styleUrls: ['./cars-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarsProjectComponent implements OnInit {
  carsProject: Car[] = [];
  constructor(private cars: CarsProjectService) {}
  ngOnInit(): void {
    this.carsProject = this.cars.getCars();
  }
}

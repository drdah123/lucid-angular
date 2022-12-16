import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/Types/cars';

@Component({
  selector: 'app-car-card-project',
  templateUrl: './car-card-project.component.html',
  styleUrls: ['./car-card-project.component.css'],
})
export class CarCardProjectComponent implements OnInit {
  @Input() car = {} as Car;
  @Input() isActive: boolean = false;
  constructor() {}
  ngOnInit(): void {}
}

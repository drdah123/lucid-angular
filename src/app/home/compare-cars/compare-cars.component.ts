import { Component } from '@angular/core';
import { ComparCard } from 'src/app/Types/cars';

const initialState = {
  name: 'AIR DREAM EDITION',
  color: 'Infinite black',
  wheel: '19” Aero Range',
};

@Component({
  selector: 'app-compare-cars',
  templateUrl: './compare-cars.component.html',
  styleUrls: ['./compare-cars.component.css'],
})
export class CompareCarsComponent {
  carOne = initialState;
  carTwo = initialState;
  carThree = initialState;
}

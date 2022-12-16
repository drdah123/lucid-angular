import { Injectable } from '@angular/core';
import { carsProject } from '../../../assets/data/data';

@Injectable({
  providedIn: 'root',
})
export class CarsProjectService {
  constructor() {}
  getCars() {
    return carsProject;
  }
}

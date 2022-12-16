import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car, ComparCard } from 'src/app/Types/cars';
import { carColors, carWheels, carImages, cars } from 'src/assets/data/data';

@Component({
  selector: 'app-compare-cars-card',
  templateUrl: './compare-cars-card.component.html',
  styleUrls: ['../compare-cars.component.css'],
})
export class CompareCarsCardComponent implements OnInit {
  @Input() car: ComparCard = {} as ComparCard;
  carColors = carColors;
  carWheels = carWheels;
  isOpen = false;
  cars = cars;

  carColor = carColors.find((carC) => carC.name === this.car.color);
  carWheel = carWheels.find((carW) => carW.name === this.car.wheel);
  carImage = carImages.find((carI) => {
    return (
      carI.name === this.car.name &&
      carI.color === this.car.color &&
      carI.wheel === this.car.wheel
    );
  });
  ngOnInit(): void {
    this.carUpdater();
  }

  carUpdater() {
    this.carColor = carColors.find((carC) => carC.name === this.car.color);
    this.carWheel = carWheels.find((carW) => carW.name === this.car.wheel);
    this.carImage = carImages.find((carI) => {
      return (
        carI.name === this.car.name &&
        carI.color === this.car.color &&
        carI.wheel === this.car.wheel
      );
    });
  }
  openMenu() {
    this.isOpen = !this.isOpen;
  }

  chooseDesign(changed: string, type: string): void {
    if (type === 'name') {
      const newCar = carImages.find((carI) => carI.name === changed);
      this.car = {
        //  @ts-ignore
        name: newCar.name,
        //  @ts-ignore
        wheel: newCar.wheel,
        //  @ts-ignore
        color: newCar.color,
      };
      this.carUpdater();
      this.isOpen = false;
    }
    if (type === 'color') {
      this.car = { ...this.car, color: changed };
      this.carUpdater();
    }
    if (type === 'wheel') {
      this.car = { ...this.car, wheel: changed };
      this.carUpdater();
    }
  }
}

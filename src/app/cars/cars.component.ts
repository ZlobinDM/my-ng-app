import { Component } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars = [{
    name: 'Nissan',
    year: 2015
  }, {
    name: 'Mitsubishi',
    year: 2010
  }, {
    name: 'Tesla',
    year: 2018
  }, {
    name: 'Lexus',
    year: 2017
  }, {
    name: 'Ferrary',
    year: 2013
  }];

  constructor() {
  }

  updateCarList(car: { name: string, year: number }) {
    this.cars.push(car);
  }

  changeCarName() {
    this.cars[0].name = 'New car name';
  }
  deleteCar() {
    this.cars.splice(0, 1);
  }
}

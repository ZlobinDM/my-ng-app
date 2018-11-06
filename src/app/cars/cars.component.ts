import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';



interface Cars {
  name: string;
  isSold: boolean;
  color: string;
  id: number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {

  appTitle;
  cars: Cars[] = [];
  carName = '';

  colors = [
    'red',
    'green',
    'purple',
    'yellow'
  ];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    // console.log(JSON.stringify(this.carsService.getAppTitle()));
    this.appTitle = this.carsService.getAppTitle();
  }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
        console.log(this.cars);
      },
      (error) => {
        alert(error);
      });
  }

  addCar() {
    this.carsService
      .addCarToList(this.carName)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService
      .changeColor(car, this.getRandomColor())
      .subscribe(data => {
        console.log(data);
      });
  }

  deleteCar(car: Cars) {
    this.carsService
      .deleteCar(car)
      .subscribe(data => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  cars = [];

  constructor(private servise: CarsService) { }

  ngOnInit() {
    this.cars = this.servise.cars;
  }

}

import {
  Component,
  OnInit
} from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName = '';
  constructor(private servise: CarsService) { }

   ngOnInit() {
  }

  addCar() {
    this.servise.addCarToList(this.carName);
    this.carName = '';
  }

  delCar() {
    this.servise.deleteCar();
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('carItem') car: { name: string, year: number };
  carItem = false;
}

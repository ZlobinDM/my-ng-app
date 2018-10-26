import {
  Component,
  Input
} from '@angular/core';
import { ConsoleService } from '../console.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [ConsoleService]
})
export class CarComponent {

  @Input() car: { name: string, isSold: boolean };

  constructor(private consoleServise: ConsoleService) {
  }
  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    };
  }

  onAction (type: string) {
    this.car.isSold = type === 'buy' ? true : false;
    this.consoleServise.log(`${this.car.name} status = ${type}`);
  }
}

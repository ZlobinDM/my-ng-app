import { ConsoleService } from './console.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
    constructor(private consoleService: ConsoleService) { }
    cars = [{
        name: 'Nissan',
        isSold: false
        }, {
            name: 'Mitsubishi',
            isSold: false
        }, {
            name: 'Tesla',
            isSold: false
        }, {
            name: 'Lexus',
            isSold: false
        }, {
            name: 'Ferrary',
            isSold: false
        }
    ];

    addCarToList(name: string) {
        this.cars.push({ isSold: false, name });
        this.consoleService.log(`Машина ${name} была добавлена!`);
    }

    deleteCar() {
        this.cars.splice(0, 1);
    }
 }

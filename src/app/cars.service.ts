import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class CarsService {

    constructor(private http: Http) { }

    getAppTitle() {
        return this.http.get('http://localhost:3000/title')
            .pipe(map(response => {
                const valueList = response.json();
                return valueList.map(function (data: any) {
                    return data.value;
                });
            }));
    }

    getCars() {
        const headers = new Headers({
            'Content-Type': 'application/json; charset=utf8'
        });

        return this.http.get('http://localhost:3000/cars', {headers})
            .pipe(map((response: Response) => {
               return response.json();
            }), catchError((e: Response) => {
                return throwError('Server is not avaliable now, try later!');
            })
        );
    }

    addCarToList(carName: string) {
        const data = {
            name: carName,
            isSold: false,
            color: 'silver'
        };
        return this.http.post('http://localhost:3000/cars', data)
            .pipe(map((response: Response) => {
                return response.json();
                })
            );
    }

    changeColor(car: any, color: string) {
        car.color = color;
        console.log(JSON.stringify(car));
        return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
            .pipe(map((response: Response) => {
                return response.json();
                })
            );
        }

    deleteCar(car) {
        return this.http.delete(`http://localhost:3000/cars/${car.id}`)
            .pipe(map((response: Response) => {
                return response.json();
                })
            );
        }
 }

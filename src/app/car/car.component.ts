import {
  Component,
  Input,
  ElementRef,
  ContentChild,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('carItem') car: { name: string, year: number };
  // tslint:disable-next-line:no-input-rename
  @Input('carName') carName: string;
  @ContentChild('carHaeading') carHaeading: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}

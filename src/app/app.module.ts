import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { BackgroundDirective } from './directives/background.directive';
import { SwitchTemplateComponent } from './switch-template/switch-template.component';
import { PipesTemplateComponent } from './pipes-template/pipes-template.component';
import { PowPipe } from './pipes-template/pow.pipe';
import { ConsoleService } from './console.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    BackgroundDirective,
    SwitchTemplateComponent,
    PipesTemplateComponent,
    PowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

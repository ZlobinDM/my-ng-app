import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { BackgroundDirective } from './directives/background.directive';
import { SwitchTemplateComponent } from './switch-template/switch-template.component';
import { PipesTemplateComponent } from './pipes-template/pipes-template.component';
import { PowPipe } from './pipes-template/pow.pipe';
import { ConsoleService } from './console.service';
import { FormTemplateComponent } from './form-template/form-template.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    BackgroundDirective,
    SwitchTemplateComponent,
    PipesTemplateComponent,
    PowPipe,
    FormTemplateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

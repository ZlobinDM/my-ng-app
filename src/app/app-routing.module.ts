import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { HomePageComponent } from './home-page/home-page.component';


const appRoutes: Routes = [
    { path: 'cars', component: CarsComponent },
    { path: '', component: HomePageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

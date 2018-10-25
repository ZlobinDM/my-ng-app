import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-template',
  template: `
    <div class="row">
      <div class="col-xs-8 offset-2">
        <!--<h2>{{ name}}</h2>
        <h2>{{ name | lowercase }}</h2>
        <h2>{{ name | uppercase }}</h2>
        <h2>{{ name | slice:0:3 }}</h2>
        <h2>{{ name | slice:3:6 | uppercase }}</h2>
        <hr>
        <h2>{{ pi }}</h2>
        <h2>{{ pi | number }}</h2>
        <h2>{{ pi | number:'2.2-2' }}</h2>
        <hr>
        <h2>{{ money | currency:'EUR':true }}</h2>
        <hr>
        <h2>{{ date | date }}</h2>
        <hr>
        <h2>{{ amount | percent }}</h2>
        <hr>
        <h2><pre>{{ object | json }}</pre></h2>
        -->
        <h2>{{ 2 | appPow:3 }}</h2>

      </div>
    </div>
  `
})
export class PipesTemplateComponent {
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
    {
      xyz: 3,
      numbers: [1, 2, 3]
    }
  };


}

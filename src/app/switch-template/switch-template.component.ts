import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-template',
  templateUrl: './switch-template.component.html',
  styleUrls: ['./switch-template.component.css']
})
export class SwitchTemplateComponent {

  items = [1, 2, 3, 4];
  current = 1;

  constructor() {
  }

  onClick(num: number) {
    this.current = num;
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
    }];

  submitForm(form: NgForm) {

  }
}

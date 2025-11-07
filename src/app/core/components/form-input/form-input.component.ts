import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-wa',
  template: `
  <div class="container-input">
    <div>
      <label for="">{{label}}</label>
    </div>
    <input class="inp" type="text">
  </div>
  `,
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  @Input()
  public label: string = '';

}

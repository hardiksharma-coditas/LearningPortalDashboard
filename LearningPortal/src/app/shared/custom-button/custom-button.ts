import { Component, input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.scss'
})
export class CustomButton {

  label=input('')
  type=input<'reset'|'submit'|''>('')
}

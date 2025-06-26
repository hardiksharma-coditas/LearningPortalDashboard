import { Component, input } from '@angular/core';
import { CustomButton } from "../../shared/custom-button/custom-button";
import { PurchaseButtonPermit } from '../../directives/purchase-button-permit';

@Component({
  selector: 'app-course-card',
  imports: [CustomButton,PurchaseButtonPermit],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss'
})
export class CourseCard {

  name=input.required<string>()
  type=input.required<'paid'|'free'>()
  cost=input<string>('')
  instructor=input.required<string>()
  duration=input.required<string>()

}

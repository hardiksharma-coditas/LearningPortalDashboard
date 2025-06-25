import { Component, input } from '@angular/core';
import { CustomButton } from "../../shared/custom-button/custom-button";

@Component({
  selector: 'app-course-card',
  imports: [CustomButton],
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

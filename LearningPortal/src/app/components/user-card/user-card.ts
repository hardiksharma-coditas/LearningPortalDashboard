import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss'
})
export class UserCard {

  name=input.required<string>()
  role=input.required<'admin'|'student'|'instructor'>()
  email=input.required<string>()
}

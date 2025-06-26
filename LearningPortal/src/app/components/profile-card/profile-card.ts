import { Component, inject, input } from '@angular/core';
import { CustomButton } from "../../shared/custom-button/custom-button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  imports: [CustomButton],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss'
})
export class ProfileCard {

  name=input.required<string>()
  role=input.required<string>()
  email=input.required<string>()

  router=inject(Router)

   logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')

    this.router.navigateByUrl('/login')
  }
}

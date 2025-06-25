import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButton } from "../../shared/custom-button/custom-button";

@Component({
  selector: 'app-header',
  imports: [CustomButton],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  router=inject(Router)

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('roke')

    this.router.navigateByUrl('/login')
  }
}

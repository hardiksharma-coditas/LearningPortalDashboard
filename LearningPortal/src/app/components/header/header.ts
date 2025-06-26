import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButton } from "../../shared/custom-button/custom-button";
import { Modal } from "../../shared/modal/modal";
import { ProfileCard } from "../profile-card/profile-card";
import { User } from '../../types/user';


@Component({
  selector: 'app-header',
  imports: [CustomButton, Modal, ProfileCard],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  router=inject(Router)

  name=input.required<string>()
  role=input.required<string>()
  email=input.required<string>()

  showProfile:boolean=false

  openProfile(){
    this.showProfile=true
  }

  closeProfile(){
    this.showProfile=false
  }
}

import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-page',
  imports: [Header,RouterLink,RouterLinkActive,RouterOutlet,ReactiveFormsModule],
  templateUrl: './student-page.html',
  styleUrl: './student-page.scss'
})
export class StudentPage {

  searchElement=new FormControl('')
  page:number=0
  
  setFilter(e:Event){}
  setLimit(e:Event){}

  moveLeft(){}

  moveRight(){}

  search(e:Event){

  }

}

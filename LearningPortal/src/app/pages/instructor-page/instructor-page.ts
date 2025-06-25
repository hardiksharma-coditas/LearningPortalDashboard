import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-instructor-page',
  imports: [Header,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './instructor-page.html',
  styleUrl: './instructor-page.scss'
})
export class InstructorPage {

}

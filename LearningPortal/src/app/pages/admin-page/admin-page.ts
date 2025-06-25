import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  imports: [Header,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss'
})
export class AdminPage {

}

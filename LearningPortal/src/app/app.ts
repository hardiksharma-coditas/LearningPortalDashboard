import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Example } from "./pages/example/example";
import { ToastComponent } from './components/toast/toast';
// import { ToastComponent } from "./components/toast/toast";

@Component({
  selector: 'app-root',
  imports: [ToastComponent,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'LearningPortal';
}

import { Component } from '@angular/core';
import { MENUS } from './config/menus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-craft';
  menus = MENUS;
  
}

import { Component, OnInit } from '@angular/core';
import { MENUS } from '../config/menus';

@Component({
  selector: 'app-slidebar',
  templateUrl: './app-slidebar.component.html',
  styleUrls: ['./app-slidebar.component.css']
})
export class AppSlidebarComponent implements OnInit {

  menus = MENUS;

  constructor() { }

  ngOnInit() {
  }

}

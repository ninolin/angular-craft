import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppSlidebarComponent } from './app-slidebar/app-slidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppSlidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

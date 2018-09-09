import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { SettingComponent } from './setting/setting.component';
import { AccountDialogComponent } from './account/account.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatInputModule, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatSortModule, 
  MatTableModule, 
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule
} from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountComponent,
    SettingComponent,
    AccountDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AccountDialogComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';

import {FirebaseModule} from 'angular-firebase';

import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';





const appRoutes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ), 
    BrowserModule, FirebaseModule, HttpClientModule, EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

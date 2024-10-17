import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

imports: [
NgForm,
FormsModule,
ReactiveFormsModule,
FormGroup
]
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }

  
}
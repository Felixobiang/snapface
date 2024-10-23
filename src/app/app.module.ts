import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { CoreModule } from './core/core.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

@NgModule({
  declarations: [
  
  
  ],
imports: [
BrowserModule,
FormsModule,
ReactiveFormsModule,
AppRoutingModule,
CoreModule,
LandingPageModule,
AuthRoutingModule,
AuthModule
],


})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }

  
}
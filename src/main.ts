import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import {  AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
registerLocaleData(fr.default);
bootstrapApplication(AppComponent, appConfig, 
  
)
  .catch((err) => console.error(err));

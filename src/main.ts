import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppComponen } from './app/app.component';
registerLocaleData(fr.default);
bootstrapApplication(AppComponen, appConfig)
  .catch((err) => console.error(err));

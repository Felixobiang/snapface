import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './components/header/header.component';
import { routes } from '../app.routes';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports:[
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
  ],
})
export class CoreModule { }

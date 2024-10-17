import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe ,UpperCasePipe} from '@angular/common';
import { interval, Observable } from 'rxjs';
import { map,filter,tap } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

    interval$!:Observable<string>;
    

  ngOnInit(): void {


  }

}






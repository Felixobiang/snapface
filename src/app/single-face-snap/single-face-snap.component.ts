import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass,NgIf,  UpperCasePipe,DatePipe, AsyncPipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';
@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    NgIf,
    UpperCasePipe,
    DatePipe,
    RouterLink,
    AsyncPipe
    ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{

  faceSnap$! : Observable <FaceSnap>;

  constructor(private faceSnapService :FaceSnapService, private route : ActivatedRoute){};

  snapButtonText!: string;
  

  ngOnInit(): void {
   this.snapButtonText='oh Snap!';
   const faceSnapId=+this.route.snapshot.params["id"];
   this.faceSnap$=this.faceSnapService.getFaceSnapById(faceSnapId);
}
  onSnap(faceSnapId : number) {
    if( this.snapButtonText === 'Oh Snap!')
      {this.faceSnapService.snapFaceSnapById(faceSnapId,'snap').pipe(
        tap(() => this.snapButtonText = 'Oops, unSnap!')
    );}
    else {this.faceSnapService.snapFaceSnapById(faceSnapId,'unsnap').pipe(
      tap(() => this.snapButtonText = 'Oh Snap!')
  );}
  }



}

  






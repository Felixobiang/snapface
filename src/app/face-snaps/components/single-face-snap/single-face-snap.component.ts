import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { NgStyle, NgClass,NgIf,  UpperCasePipe,DatePipe, AsyncPipe } from '@angular/common';
import { FaceSnapService } from '../../../core/services/face-snaps.service';
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

  buttonText!: string;
  

  ngOnInit(): void {
   this.buttonText='oh Snap!';
   const faceSnapId=+this.route.snapshot.params["id"];
   this.faceSnap$=this.faceSnapService.getFaceSnapById(faceSnapId);
}
onSnap(faceSnapId: number) {
  if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
          tap(() => this.buttonText = 'Oops, unSnap!')
      );
  } else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
          tap(() => this.buttonText = 'Oh Snap!')
      );
  }
}



}

  






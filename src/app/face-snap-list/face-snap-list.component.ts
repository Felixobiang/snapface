import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapService } from '../services/face-snaps.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
  FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{

  faceSnaps!: FaceSnap[];
  faceSnaps$!:Observable<FaceSnap[]>;
constructor (private faceSnapSerrvvice:FaceSnapService){}

  ngOnInit(): void {
    this.faceSnaps$=this.faceSnapSerrvvice.getFacceSnap();


  }

}

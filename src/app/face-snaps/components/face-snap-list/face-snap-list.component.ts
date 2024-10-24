import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapService } from '../../../core/services/face-snaps.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
  FaceSnapComponent,
  AsyncPipe,
  
  
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  
  faceSnaps$!: Observable<FaceSnap[]>;
  
  
constructor (private faceSnapService:FaceSnapService ){}



  ngOnInit(): void {
    this.faceSnaps$=this.faceSnapService.getAllFaceSnaps();

 
  }

}

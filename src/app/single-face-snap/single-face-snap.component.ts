import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass,  UpperCasePipe,DatePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
    ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;

  constructor(private faceSnapService :FaceSnapService, private route : ActivatedRoute){};

  snapButtonText!: string;
  userHasSnapped!:boolean;

  ngOnInit(): void {
   this.prepareInterface();
   this.getFaceSnap();
  
}
  onSnap(): void {
    if(this.userHasSnapped)
      {this.unSnap();}
    else {this.snap();}
  }
  unSnap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.faceSnap.snaps--;
    this.userHasSnapped = false;
}

snap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'snap')
    this.snapButtonText = 'Oops, unSnap!';
    this.faceSnap.snaps++;
    this.userHasSnapped = true;
}

private prepareInterface(){
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped= false;
}
private getFaceSnap(){
  const faceSnapId = this.route.snapshot.params['id'];

  this.faceSnap=this.faceSnapService.getFaceSnapById(faceSnapId);
}
}

  






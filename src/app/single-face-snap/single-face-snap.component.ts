import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { RouterLink } from '@angular/router';
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
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapService :FaceSnapService){};

  snapButtonText!: string;
  userHasSnapped!:boolean;

  ngOnInit() {
    
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped= false;
  }

  onSnap() {
    if(this.userHasSnapped)
      {this.unSnap();}
    else {this.snap();}
  }
  unSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
}

snap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'snap')
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
}

  }






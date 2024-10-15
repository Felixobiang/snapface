import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
    ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
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






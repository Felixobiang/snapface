import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { UpperCasePipe} from '@angular/common';

import { Router, RouterLink } from '@angular/router';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    UpperCasePipe,
    RouterLink
    ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapService,
              private router: Router) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
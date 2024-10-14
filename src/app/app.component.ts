import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];


  ngOnInit(): void {
    this.faceSnaps= [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        0
   ),
   new FaceSnap(
    'Montre connecte apple',
    'Cette montre va sous eau !',
    'https://boutique.orange.fr/nouveautes/apple/watch-montre-connectee/img/watch-ultra2.jpg',
    new Date(),
    96
),
new FaceSnap(
  'Appareil photo HD',
  'ce sont des appareil au nombre de pixel eleve!',
  'https://tuto-photos.com/wp-content/uploads/2018/06/Quels-sont-les-diff%C3%A9rents-types-dappareils-photo-num%C3%A9rique.jpg',
  new Date(),
  186
)

    ]

this.faceSnaps[1].setLocation('à la montagne');
  }
}






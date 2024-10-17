import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
providedIn:'root'
}
)

export class FaceSnapService{

private faceSnaps : FaceSnap[]= [
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
).withHashLocation('Aux salons de la technology 2024'),
new FaceSnap(
'Appareil photo HD',
'ce sont des appareil au nombre de pixel eleve!',
'https://tuto-photos.com/wp-content/uploads/2018/06/Quels-sont-les-diff%C3%A9rents-types-dappareils-photo-num%C3%A9rique.jpg',
new Date(),
186
),
new FaceSnap(
  'Three Rock Mountain',
  'Un endroit magnifique pour les randonnées.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
  new Date(),
  227
  ),
  new FaceSnap(
    'Un bon repas',
    'Mmmh que c\'est bon !',
    'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
     new Date(),
    101
    )

  ];
  getFacceSnap():FaceSnap[]{

    return[...this.faceSnaps]
  }

  getFaceSnapById(faceSnapId:String): FaceSnap{
    const foundFaceSnap= this.faceSnaps.find(faceSnap =>faceSnap.id ===faceSnapId);
    if (!foundFaceSnap){

        throw new Error('facesnap not found')
    }
    return foundFaceSnap
  };

  snapFaceSnapById(faceSnapId : string, snapType : SnapType){

    const faceSnap= this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);

    
  }

  
}
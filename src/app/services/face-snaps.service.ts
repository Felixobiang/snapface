import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
providedIn:'root'
}
)

export class FaceSnapService{
constructor(private http : HttpClient){}
private faceSnaps : FaceSnap[]= [];

  getFacceSnap(): Observable<FaceSnap[]>{

    return this.http.get<FaceSnap[]>('http://localhost:3000/faceSnaps');
  }

  getFaceSnapById(faceSnapId:number): FaceSnap{
    const foundFaceSnap= this.faceSnaps.find(faceSnap =>faceSnap.id ===faceSnapId);
    if (!foundFaceSnap){

        throw new Error('facesnap not found')
    }
    return foundFaceSnap
  };


  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    
    };
    this.faceSnaps.push(faceSnap);

}
   getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }


  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
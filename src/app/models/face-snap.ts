import { Location } from "@angular/common";
import { SnapType } from "./snap-type.type";

export class FaceSnap {
    location?: string;
    id: string;
constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public snaps: number){
        this.id=crypto.randomUUID().substring(0, 4);
    }

addSnap():void {

    this.snaps++;
}

removeSnap():void{
    this.snaps--;
}
snap(snapType : SnapType){
if(snapType ==='snap'){
this.addSnap
}
else if (snapType==='unsnap'){
this.removeSnap
}

};
setLocation(location: string): void {
    this.location = location;
    
  }
withHashLocation(location:string):FaceSnap{
    this.setLocation(location);
    return this;
}
}
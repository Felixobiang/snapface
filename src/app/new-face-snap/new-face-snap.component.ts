import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import {  async, Observable } from 'rxjs';
import { NgIf,  UpperCasePipe,DatePipe,AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { FaceSnap } from '../models/face-snap';


@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    DatePipe,
    NgIf,
    AsyncPipe,
  
  
  ],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit{

snapForm! : FormGroup;
faceSnapPreview$!: Observable<FaceSnap>;
urlRegex!: RegExp;
constructor (private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm=this.formBuilder.group({
      title:[null, Validators.required],
      description : [null , Validators.required],
      imageUrl : [null , [Validators.required, Validators.pattern(this.urlRegex)]]  ,
      location : [null]
    }, 
  {updateOn: 'blur'});
    
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
          ...formValue,
          createdDate: new Date(),
          snaps: 0,
          id: 0
      }))
  );
  }
onSubmitForm():void{

console.log(this.snapForm.value)
}

}

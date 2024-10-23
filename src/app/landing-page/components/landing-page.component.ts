import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink,FormsModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{
  userEmail! : string;
  
constructor(private router:Router){}
ngOnInit(): void {
  
}

onSubmitForm(form : NgForm){

  console.log(form.value);
};
onContinue(){

  this.router.navigateByUrl('facesnaps');
}

}
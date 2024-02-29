import { CommonModule } from '@angular/common';
import { Component, Input, OnInit,  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../users/data.service';

@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent{

  constructor(private dataService:DataService, private router: Router){}
  private username!:String;
  private password!:String;
submit(formdata:any) {
  this.username = formdata["username"];
  this.password = formdata["password"];
  
  if(this.dataService.getSession().get(this.username)?.["password"] === this.password){
      this.router.navigate(['leading']);
  }
}
}

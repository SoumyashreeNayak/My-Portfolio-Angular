import { CommonModule } from '@angular/common';
import { Component, Input, Output, input } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { DataService } from '../../users/data.service';
import { Data } from '../../users/data';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private dataService:DataService){}

  @Output() registrationStatus:boolean = false;
  
  username!:string;
  email!: string;
  password!:string;
  submit(formdata:any) {

    this.username = formdata.value['username']; // To see the form data in the
    this.email = formdata.value["email"];
    this.password = formdata.value["password"];

    

    this.dataService.getSession().set(this.username, new Data(this.username, this.email, this.password));
    this.registrationStatus =true;
    // console.log(this.dataService.getSession().get(this.username)?.["password"]); 
  }

  r_status():boolean{
    return  this.registrationStatus;
  }
}
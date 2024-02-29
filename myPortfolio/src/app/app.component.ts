import { Component } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { FrountpageComponent } from "./features/frountpage/frountpage.component";
import { SignUpComponent } from "./features/sign-up/sign-up.component";
import { DataService } from './users/data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, SignInComponent, FrountpageComponent, SignUpComponent]
})
export class AppComponent {
 
}

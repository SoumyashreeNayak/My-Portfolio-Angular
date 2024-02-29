import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignInComponent } from "../sign-in/sign-in.component";

@Component({
    selector: 'app-frountpage',
    standalone: true,
    templateUrl: './frountpage.component.html',
    styleUrl: './frountpage.component.css',
    imports: [RouterLink, SignInComponent, RouterOutlet]
})
export class FrountpageComponent {

}

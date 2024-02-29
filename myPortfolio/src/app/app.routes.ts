import { Routes } from '@angular/router';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { SignUpComponent } from './features/sign-up/sign-up.component';
import { FrountpageComponent } from './features/frountpage/frountpage.component';
import { LandingComponent } from './features/landing/landing.component';

export const routes: Routes = [
      {path:"signin", component:SignInComponent},
      {path:"register", component:SignUpComponent},
      {path:"**", component:FrountpageComponent},
      {path:"leading", component:LandingComponent}
];

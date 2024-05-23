import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CartaComponent } from './components/carta/carta.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'carta', component: CartaComponent }
];

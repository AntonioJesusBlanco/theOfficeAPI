import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { DocsComponent } from './docs/docs.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // 👈 Aquí va tu página principal actual
  { path: 'documentacion', component: DocsComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

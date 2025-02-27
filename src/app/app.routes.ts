import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CoursesComponent } from './components/courses/courses.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'data-bindings',
    loadComponent: () =>
      import('./components/data-bindings/data-bindings.component').then(
        (m) => m.DataBindingsComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  { path: '**', redirectTo: 'home' },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'KB HOMES | Luxury Architectural Design & Master Construction | Chennai'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Our Heritage & Leadership | KB HOMES Architects & Builders'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Turnkey Construction, 3D BIM & Interiors | KB HOMES Chennai'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Curated Luxury Portfolio & Landmark Estates | KB HOMES'
  },
  {
    path: 'estimator',
    loadComponent: () => import('./pages/estimator/estimator-page.component').then(m => m.EstimatorPageComponent),
    title: 'Instant Construction Cost Estimator | KB HOMES'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact KB HOMES | Puzhuthivakkam, Chennai | +91 73974 13423'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

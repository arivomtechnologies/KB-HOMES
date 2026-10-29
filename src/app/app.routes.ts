import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'KB Home | Luxury Architectural Design & Master Construction'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Our Heritage | KB Home'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Turnkey Construction & Architecture Services | KB Home'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Luxury Portfolio & Landmark Estates | KB Home'
  },
  {
    path: 'estimator',
    loadComponent: () => import('./pages/estimator/estimator-page.component').then(m => m.EstimatorPageComponent),
    title: 'Instant Construction Cost Estimator | KB Home'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Initiate Your Project | KB Home'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

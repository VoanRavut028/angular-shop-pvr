import { Routes } from '@angular/router';
import { Pagenotfound } from '../components/pagenotfound/pagenotfound';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/all',
    pathMatch: 'full',
  },
  {
    path: 'products/:category',
    loadComponent: () => import('../components/product-grid/product-grid'),
  },

  { path: '**', component: Pagenotfound },
];

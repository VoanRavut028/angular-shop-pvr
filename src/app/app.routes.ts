import { Routes } from '@angular/router';
import { Pagenotfound } from '../components/pagenotfound/pagenotfound';
import { ProductDetail } from '../components/productdetail/productdetail';

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
  {
    path: 'ProductDetail',
    component: ProductDetail,
  },

  { path: '**', component: Pagenotfound },
];

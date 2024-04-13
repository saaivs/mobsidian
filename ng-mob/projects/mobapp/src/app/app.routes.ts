import { Routes } from '@angular/router';
import { Page404Component } from '../pages/page404.component';
import { HomePageComponent } from '../pages/home/home-page.component';

// https://angular.io/guide/router
// https://angular.io/guide/lazy-loading-ngmodules
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'files',
    loadChildren: () =>
      import('../pages/files/files.routes').then((m) => m.routes),
  },
  { path: '**', title: '404', component: Page404Component },
];

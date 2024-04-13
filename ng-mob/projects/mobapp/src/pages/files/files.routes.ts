import { Routes } from '@angular/router';
import { FilesPageComponent } from './files-page.component';

// https://angular.io/guide/router
// https://angular.io/guide/lazy-loading-ngmodules
// https://ultimatecourses.com/blog/lazy-load-standalone-components-via-load-component
export const routes: Routes = [{ path: '', component: FilesPageComponent }];

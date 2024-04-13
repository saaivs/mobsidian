import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  ɵprovideZonelessChangeDetection as provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // https://www.reddit.com/r/Angular2/comments/1ad2juo/try_zoneless_angular/
    // https://medium.com/@eugeniyoz/angular-change-detection-today-and-tomorrow-b9c64bd294f8
    // https://riegler.fr/blog/2024-01-11-zoneless-preview
    // https://stackblitz.com/edit/angular-zoneless-demo
    // https://gist.github.com/e-oz/4d64dd47699d3a63d15572ca49dc3db3
    provideZonelessChangeDetection(),
  ],
};

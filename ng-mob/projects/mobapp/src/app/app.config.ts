import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  ɵprovideZonelessChangeDetection as provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';

// https://angular.io/guide/router#setting-the-page-title
export const appConfig: ApplicationConfig = {
  providers: [
    // https://material.angular.io/components/bottom-sheet/overview#specifying-global-configuration-defaults
    {
      provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true },
    },
    provideHttpClient(withFetch()),
    // https://angular.io/guide/router#getting-route-information
    provideRouter(
      routes,
      withViewTransitions(),
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),  
    // https://www.reddit.com/r/Angular2/comments/1ad2juo/try_zoneless_angular/
    // https://medium.com/@eugeniyoz/angular-change-detection-today-and-tomorrow-b9c64bd294f8
    // https://riegler.fr/blog/2024-01-11-zoneless-preview
    // https://stackblitz.com/edit/angular-zoneless-demo
    // https://gist.github.com/e-oz/4d64dd47699d3a63d15572ca49dc3db3
    provideZonelessChangeDetection(),
    provideAnimationsAsync(),
  ],
};

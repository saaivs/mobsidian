import { Component } from '@angular/core';
import { COMMON_MODULES } from '../../modules/common.modules';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [...COMMON_MODULES],
  template: `
    <main class="main">
      <h1>{{ title }}</h1>

      <div>
        <button mat-raised-button routerLink="/files" color="primary">
          Files
        </button>

        <mat-slide-toggle>Toggle me!</mat-slide-toggle>
      </div>
    </main>
  `,
})
export class HomePageComponent {
  title = 'mobapp';
}

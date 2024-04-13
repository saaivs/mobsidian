import { Component } from '@angular/core';
import { COMMON_MODULES } from '../modules/common.modules';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...COMMON_MODULES],
  template: `
    <main class="main">
      <div class="content">{{ title }}</div>
      <div>
        <mat-slide-toggle>Toggle me!</mat-slide-toggle>
      </div>
    </main>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'mobapp';
}

import { Component } from '@angular/core';
import { COMMON_MODULES } from '../../modules/common.modules';
import { BottomMenuService } from '../../components/bottom-menu/bottom-menu.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [...COMMON_MODULES],
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>{{ title }}</h1>

          <div>
            <button mat-raised-button routerLink="/files" color="primary">
              Files
            </button>

            <button mat-raised-button (click)="openMenu()" color="primary">
              Menu
            </button>

            <mat-slide-toggle>Toggle me!</mat-slide-toggle>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomePageComponent {
  title = 'mobapp';

  constructor(private bsmService: BottomMenuService) {}

  openMenu() {
    this.bsmService.open([{ name: '123' }, { name: '345' }]);
  }
}

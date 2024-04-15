import { Component, Inject, Injectable, signal } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { COMMON_MODULES } from '../../modules/common.modules';
import { firstValueFrom } from 'rxjs';

type BottomMenuItem<R = void> = {
  name: string;
  note?: string;
  url?: string;
  action?: (item?: BottomMenuItem) => R;
};

type BottomMenuData = {
  items: BottomMenuItem[];
};

@Component({
  selector: 'bottom-menu-content',
  standalone: true,
  imports: [...COMMON_MODULES],
  template: `
    <mat-nav-list>
      @for (item of items(); track $index) {
      <a
        href="https://keep.google.com/"
        mat-list-item
        (click)="handle($event, item)"
      >
        <span matListItemTitle>{{ item.name }}</span>
        @if(item.note){
        <span matLine>{{ item.note }}</span>
        }
      </a>
      }
    </mat-nav-list>
  `,
})
export class BottomMenuContentComponent {
  items = signal<BottomMenuItem[]>([]);

  // https://angular.io/guide/signals#what-are-signals
  constructor(
    private bottomSheetRef: MatBottomSheetRef,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: BottomMenuData
  ) {
    this.items.set(data.items || []);
  }

  handle(event: MouseEvent, item: BottomMenuItem): void {
    this.bottomSheetRef.dismiss(item);
    event.preventDefault();
  }
}

@Injectable({ providedIn: 'root' })
export class BottomMenuService {
  private bottomSheetRef: MatBottomSheetRef | null = null;

  constructor(private bottomSheet: MatBottomSheet) {}

  open<R = unknown>(items: BottomMenuItem[]): Promise<R> {
    return new Promise((resolve) => {
      this.bottomSheetRef = this.bottomSheet.open(BottomMenuContentComponent, {
        hasBackdrop: true,
        data: { items },
      });
      firstValueFrom(this.bottomSheetRef.afterDismissed()).then((result) => {
        resolve(result);
        this.bottomSheetRef = null;
      });
    });
  }
}

import { Component } from '@angular/core';
import { COMMON_MODULES } from '../modules/common.modules';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...COMMON_MODULES],
  template: `<router-outlet />`,
})
export class AppComponent {}

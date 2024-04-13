import { Component } from '@angular/core';
import { COMMON_MODULES } from '../modules/common.modules';

@Component({
  selector: 'page-404',
  standalone: true,
  imports: [...COMMON_MODULES],
  template: `
    <div>
      <h1>404</h1>
    </div>
  `,
})
export class Page404Component {

}

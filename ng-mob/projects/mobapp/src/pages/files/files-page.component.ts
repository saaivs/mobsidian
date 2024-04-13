import { Component } from '@angular/core';
import { COMMON_MODULES } from '../../modules/common.modules';

@Component({
  selector: 'files-page',
  standalone: true,
  imports: [...COMMON_MODULES],
  template: `
    <div>
      <h1>Files</h1>
    </div>
  `,
})
export class FilesPageComponent {
}

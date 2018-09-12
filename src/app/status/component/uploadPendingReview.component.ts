import { Component, Input }  from '@angular/core';

import { StatusInfo }       from './statusInfo';

@Component({
  template: `
    <div class="status-info">
      <h1>Current Status Details</h1>
      <h3>{{data.name4}}   :   {{data.status}}</h3>
    </div>
  `,
  styleUrls: ['./status.component.css']
})
export class UploadPendingReviewComponent implements StatusInfo {
  @Input() data: any;
}

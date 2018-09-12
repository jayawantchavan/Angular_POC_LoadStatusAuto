
import { Component, OnInit } from '@angular/core';

import { StatusService }         from './status.service';
import { StatusDetails }     from './status-deatails';

@Component({
  selector: 'app-status',
  template: `
    <div>
      <app-statusInfo-banner [ads]="ads"></app-statusInfo-banner>
    </div>
  `
})
export class StatusComponent implements OnInit {
 ads: StatusDetails;
  constructor(private adService: StatusService) {}

  ngOnInit() {
    this.ads = this.adService.getStatus();
  }
}

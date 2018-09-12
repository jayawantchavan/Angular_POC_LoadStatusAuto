import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { StatusDirective } from './status.directive';
import { StatusDetails }      from './status-deatails';
import { StatusInfo } from './statusInfo';

@Component({
  selector: 'app-statusInfo-banner',
  template: `
              <div>
                <h3>Current Status !!</h3>
                <ng-template ad-status></ng-template>
              </div>
            `
})
export class StatusBannerComponent implements OnInit, OnDestroy {
  @Input() ads: StatusDetails;

  @ViewChild(StatusDirective) adHost: StatusDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
  ngOnInit() {
    this.loadStatusInfo();
  }

  ngOnDestroy() {
  
  }

  loadStatusInfo() {
    
    let StatusDetails = this.ads; 

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(StatusDetails.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<StatusInfo>componentRef.instance).data = StatusDetails.data;
  }
  
}

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-status]',
})
export class StatusDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }    from './app.component';
import { StatusBannerComponent }    from './status/component/status-banner.component';
import { StatusDirective }          from './status/component/status.directive';
import { StatusService }            from './status/component/status.service';
import { VerifiedComponent }    from    './status/component/verified.component';
import { NewVerificationComponent }    from    './status/component/newVerification.component';
import { UploadRequireComponent } from './status/component/uploadRequire.component';
import { UploadPendingReviewComponent } from './status/component/uploadPendingReview.component';
import { StatusComponent } from './status/component/status.component';

@NgModule({
  imports: [ BrowserModule ],
  providers: [StatusService],
  declarations: [ AppComponent,
                  StatusComponent,
                  StatusBannerComponent,
                  VerifiedComponent,
                  NewVerificationComponent,
                  UploadRequireComponent,
                  UploadPendingReviewComponent,
                  StatusDirective,
                 ],
  entryComponents: [ VerifiedComponent, NewVerificationComponent, UploadRequireComponent,UploadPendingReviewComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

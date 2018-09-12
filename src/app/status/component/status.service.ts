import { Injectable }           from '@angular/core';
import { StatusDetails }        from './status-deatails';
import { VerifiedComponent } from './verified.component';
import { NewVerificationComponent } from './newVerification.component';
import { UploadRequireComponent } from './uploadRequire.component';
import { UploadPendingReviewComponent } from './uploadPendingReview.component';

@Injectable()
export class StatusService {
  getStatus() {

    // In this Method we need to add checks to select dedicated component object based on status.
    
     return new StatusDetails(VerifiedComponent,   {name1:'status 1', status : 'VERIFIED STATUS'});
     /*return new StatusDetails(NewVerificationComponent,   {name2: 'status 2', status : 'NEW_VERIFICATION'});
     return new StatusDetails(UploadRequireComponent,   {name3: 'status 3' , status: 'UPLOAD_REQUIRE'});
     return new StatusDetails(UploadPendingReviewComponent,   {name4: 'status 4'', status : 'UPLOAD_PENDING_REVIEW'});
       */
  }
  
}

import { Pipe, PipeTransform } from '@angular/core';
import { AppConstant} from '../constant/app.constant'

@Pipe({
  name: 'approvalStatus'
})
export class ApprovalStatusPipe implements PipeTransform {
  constructor(public constant:AppConstant){

  }
  transform(value: any, val: any): any {
    let self = this;
    if(val == self.constant['APPROVAL_ACCEPT_STATUS']){
      return self.constant['APPROVED'];
    } 
    if(val == self.constant['APPROVAL_REJECT_STATUS']){
      return self.constant['REJECTED'];
    } 
    else{
      return self.constant['PENDING'];
    }
  }

}

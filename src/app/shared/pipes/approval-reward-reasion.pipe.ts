import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approvalRewardReasion'
})
export class ApprovalRewardReasionPipe implements PipeTransform {

  transform(value: any, val): any {
   if(val == 1){
     return  'Inaugral Offer';
   } else if(val == 2){
    return  'Signup Bonus';
   }
  }

}

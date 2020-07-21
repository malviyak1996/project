import { Pipe, PipeTransform } from '@angular/core';
import { AppConstant} from '../constant/app.constant'
@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform {
  constructor(public constant:AppConstant){

  }
  transform(value: any, val): any {
    let self = this;
    if(val == self.constant['USER_TYPE_RETAILER']){
      return self.constant['USER_TYPE_RETAILER_TEXT'];
    } else  if(val == self.constant['USER_TYPE_DISTRIBUTER']){
      return self.constant['USER_TYPE_DISTRIBUTER_TEXT'];
    } else  if(val == self.constant['USER_TYPE_MANIFACTURER']){
      return self.constant['USER_TYPE_MANIFACTURER_TEXT'];
     } else  if(val == self.constant['PRE_RETAILER_AUTHENTICATION']){
      return 'PRA';
     } else  if(val == self.constant['DB_OWNER']){
      return 'DBO';
     }
   }


}

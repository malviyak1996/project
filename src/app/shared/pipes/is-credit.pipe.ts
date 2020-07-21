import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isCredit'
})
export class IsCreditPipe implements PipeTransform {

  transform(value: any, val): any {
   if(val == 'C'){
     return 'Credit';
   } else{
    return 'Debit';
   }
  }

}

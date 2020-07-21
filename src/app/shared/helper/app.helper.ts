import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AppHelper {
    
    constructor(public toasty:ToastrService){

    }
   /**
    * @function as @return succcess
    */
    public success(response){
        if(response.hasOwnProperty('metadata') && response['metadata'].hasOwnProperty('http_status') && parseInt(response['metadata']['http_status']) == 200  ){
          return true;
        } else {
            return false;
        }
    }

   /**
    * @function as @return errorHandler
    */
    public errorHandler(error){
     console.error(error)
    }


   /**
    * @function as @return recordNotFound
    */
   public notFound(response){
     let self = this;  
    if(response.hasOwnProperty('metadata') && response['metadata'].hasOwnProperty('http_status') && parseInt(response['metadata']['http_status']) != 200  ){
        if(response.hasOwnProperty('error') && response['error'].hasOwnProperty('user_error_message') &&  response['error']['user_error_message'].hasOwnProperty('user_message')){
            self.toasty.error(response['error']['user_error_message']['user_message'],'ERROR');
        } else{
            self.toasty.info('ERROR','Error');
        }
      } else {
         self.errorHandler(response);
      }
   }

 }
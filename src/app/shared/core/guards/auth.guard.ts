import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { UtilityService } from '../../../shared/service/utility.service';
// import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
     private  authServic: AuthService,
     private router: Router,public utility:UtilityService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // if (this.authServic.isLoggednIn()) {
      //   return true;
      // } else {
      //   this.router.navigate(['/']);
      //   return false;
      // } 
     let self =this;
      if(self.utility.permission('super_user')){
        return true;
      } 
      this.router.navigate(['/']);
      return false;
  }
}

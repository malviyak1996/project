import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router'
import { AppConstant } from '../../../constant/app.constant';
import * as _ from 'underscore';
@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
 sethome=false;
 navigateUser:string;
 userNavigation:any;
 
  constructor(
    public router: Router,
  public constant:AppConstant) { }

  ngOnInit() 
  {
  }

  logOut() {
    let self = this;
    localStorage.clear();
    self.router.navigate(['/']);
  }

}

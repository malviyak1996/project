import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ErrorPageComponent } from './shared/core/component/error-page/error-page.component';
import { TopNavBarComponent } from './shared/core/component/top-nav-bar/top-nav-bar.component';
import { AppConstant } from './shared/constant/app.constant';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHelper } from './shared/helper/app.helper';
import { TemparatureGameComponent } from './modules/demo/temparature-game/temparature-game.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    TopNavBarComponent,
    TemparatureGameComponent
  ],
  imports: [
    BrowserAnimationsModule,
  ToastrModule.forRoot({ timeOut: 4000 }),
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppConstant,AppHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }

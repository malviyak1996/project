/**
 * Angular's
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './shared/core/component/error-page/error-page.component';
import { TemparatureGameComponent } from './modules/demo/temparature-game/temparature-game.component';
const routes: Routes = [
  {path: '', component: TemparatureGameComponent, pathMatch: 'full'},
 
  {
    path: '**',
    component: ErrorPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

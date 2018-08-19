import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormpageComponent } from './formpage/formpage.component';
import {FormpagelistviewComponent} from './formpagelistview/formpagelistview.component'

const routes: Routes = [
  {
    path: 'forms',
    component: FormpageComponent
  },
  {
    path: 'formslist',
    component: FormpagelistviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

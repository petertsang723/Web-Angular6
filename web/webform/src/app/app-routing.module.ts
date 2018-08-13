import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormpageComponent } from './formpage/formpage.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

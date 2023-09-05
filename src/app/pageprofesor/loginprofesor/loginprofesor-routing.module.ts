import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginprofesorPage } from './loginprofesor.page';

const routes: Routes = [
  {
    path: '',
    component: LoginprofesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginprofesorPageRoutingModule {}

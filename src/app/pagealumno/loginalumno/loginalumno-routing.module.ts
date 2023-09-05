import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginalumnoPage } from './loginalumno.page';

const routes: Routes = [
  {
    path: '',
    component: LoginalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginalumnoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoasitenciaPage } from './listadoasitencia.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoasitenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoasitenciaPageRoutingModule {}

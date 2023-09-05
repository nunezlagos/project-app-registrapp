import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoasitenciaPageRoutingModule } from './listadoasitencia-routing.module';

import { ListadoasitenciaPage } from './listadoasitencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoasitenciaPageRoutingModule
  ],
  declarations: [ListadoasitenciaPage]
})
export class ListadoasitenciaPageModule {}

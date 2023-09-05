import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginprofesorPageRoutingModule } from './loginprofesor-routing.module';

import { LoginprofesorPage } from './loginprofesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginprofesorPageRoutingModule
  ],
  declarations: [LoginprofesorPage]
})
export class LoginprofesorPageModule {}

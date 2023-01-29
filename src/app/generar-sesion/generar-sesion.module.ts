import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarSesionPageRoutingModule } from './generar-sesion-routing.module';

import { GenerarSesionPage } from './generar-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarSesionPageRoutingModule
  ],
  declarations: [GenerarSesionPage]
})
export class GenerarSesionPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewGenerarSesionPageRoutingModule } from './preview-generar-sesion-routing.module';

import { PreviewGenerarSesionPage } from './preview-generar-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewGenerarSesionPageRoutingModule
  ],
  declarations: [PreviewGenerarSesionPage]
})
export class PreviewGenerarSesionPageModule {}

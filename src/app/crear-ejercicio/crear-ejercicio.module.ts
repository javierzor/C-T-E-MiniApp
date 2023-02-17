import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEjercicioPageRoutingModule } from './crear-ejercicio-routing.module';

import { CrearEjercicioPage } from './crear-ejercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEjercicioPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CrearEjercicioPage],
})
export class CrearEjercicioPageModule {}

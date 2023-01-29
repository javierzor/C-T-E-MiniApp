import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarSesionPage } from './generar-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarSesionPageRoutingModule {}

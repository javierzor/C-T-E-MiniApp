import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewGenerarSesionPage } from './preview-generar-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewGenerarSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewGenerarSesionPageRoutingModule {}

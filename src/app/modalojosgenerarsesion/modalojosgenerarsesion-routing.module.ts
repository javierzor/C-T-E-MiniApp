import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalojosgenerarsesionPage } from './modalojosgenerarsesion.page';

const routes: Routes = [
  {
    path: '',
    component: ModalojosgenerarsesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalojosgenerarsesionPageRoutingModule {}

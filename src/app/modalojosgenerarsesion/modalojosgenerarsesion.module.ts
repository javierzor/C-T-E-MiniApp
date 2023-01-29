import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalojosgenerarsesionPageRoutingModule } from './modalojosgenerarsesion-routing.module';

import { ModalojosgenerarsesionPage } from './modalojosgenerarsesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalojosgenerarsesionPageRoutingModule
  ],
  declarations: [ModalojosgenerarsesionPage]
})
export class ModalojosgenerarsesionPageModule {}

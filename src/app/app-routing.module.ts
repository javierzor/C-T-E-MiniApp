import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'preview-generar-sesion',
    pathMatch: 'full'
  },  

  {
    path: 'preview-generar-sesion',
    loadChildren: () => import('./preview-generar-sesion/preview-generar-sesion.module').then( m => m.PreviewGenerarSesionPageModule)
  },
  {
    path: 'crear-ejercicio',
    loadChildren: () =>
      import('./crear-ejercicio/crear-ejercicio.module').then(
        (m) => m.CrearEjercicioPageModule
      ),
  },

  {
    path: 'generar-sesion',
    loadChildren: () => import('./generar-sesion/generar-sesion.module').then( m => m.GenerarSesionPageModule)
  },
  {
    path: 'modalojosgenerarsesion',
    loadChildren: () => import('./modalojosgenerarsesion/modalojosgenerarsesion.module').then( m => m.ModalojosgenerarsesionPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

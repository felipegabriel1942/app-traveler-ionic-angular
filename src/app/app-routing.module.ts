import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule'},
  { path: 'reservas-lugares', loadChildren: './lugares/ofertas/reservas-lugares/reservas-lugares.module#ReservasLugaresPageModule' },
  { path: 'ofertas-reservas', loadChildren: './lugares/ofertas/ofertas-reservas/ofertas-reservas.module#OfertasReservasPageModule' },
  { path: 'reservas', loadChildren: './reservas/reservas.module#ReservasPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lugares', pathMatch: 'full'},
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule'},
  { path: 'lugares', loadChildren: './lugares/lugares.module#LugaresPageModule' },
  { path: 'reservas', loadChildren: './reservas/reservas.module#ReservasPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

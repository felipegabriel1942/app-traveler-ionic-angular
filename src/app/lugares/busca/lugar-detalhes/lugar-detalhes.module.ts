import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LugarDetalhesPage } from './lugar-detalhes.page';
import { CriarReservaComponent } from '../../../reservas/criar-reserva/criar-reserva.component';

const routes: Routes = [
  {
    path: '',
    component: LugarDetalhesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LugarDetalhesPage, CriarReservaComponent],
  entryComponents: [CriarReservaComponent]
})
export class LugarDetalhesPageModule {}

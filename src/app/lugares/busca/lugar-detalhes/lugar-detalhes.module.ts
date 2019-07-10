import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LugarDetalhesPage } from './lugar-detalhes.page';

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
  declarations: [LugarDetalhesPage]
})
export class LugarDetalhesPageModule {}

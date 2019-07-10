import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LugaresPage } from './lugares.page';
import { LugaresRoutingModule } from './lugares-routing.modules';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LugaresRoutingModule
  ],
  declarations: [LugaresPage]
})
export class LugaresPageModule {}

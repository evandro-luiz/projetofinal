import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarclientePageRoutingModule } from './atualizarcliente-routing.module';

import { AtualizarclientePage } from './atualizarcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarclientePageRoutingModule
  ],
  declarations: [AtualizarclientePage]
})
export class AtualizarclientePageModule {}

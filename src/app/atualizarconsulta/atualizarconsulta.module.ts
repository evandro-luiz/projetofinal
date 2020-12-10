import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarconsultaPageRoutingModule } from './atualizarconsulta-routing.module';

import { AtualizarconsultaPage } from './atualizarconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarconsultaPageRoutingModule
  ],
  declarations: [AtualizarconsultaPage]
})
export class AtualizarconsultaPageModule {}

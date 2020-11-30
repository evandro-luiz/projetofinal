import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqSenhaPageRoutingModule } from './esq-senha-routing.module';

import { EsqSenhaPage } from './esq-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqSenhaPageRoutingModule
  ],
  declarations: [EsqSenhaPage]
})
export class EsqSenhaPageModule {}

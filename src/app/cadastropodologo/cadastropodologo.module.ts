import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastropodologoPageRoutingModule } from './cadastropodologo-routing.module';

import { CadastropodologoPage } from './cadastropodologo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastropodologoPageRoutingModule
  ],
  declarations: [CadastropodologoPage]
})
export class CadastropodologoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfenviosenhaPageRoutingModule } from './confenviosenha-routing.module';

import { ConfenviosenhaPage } from './confenviosenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfenviosenhaPageRoutingModule
  ],
  declarations: [ConfenviosenhaPage]
})
export class ConfenviosenhaPageModule {}

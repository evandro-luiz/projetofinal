import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarpodologoPageRoutingModule } from './atualizarpodologo-routing.module';

import { AtualizarpodologoPage } from './atualizarpodologo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarpodologoPageRoutingModule
  ],
  declarations: [AtualizarpodologoPage]
})
export class AtualizarpodologoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FincadclientePageRoutingModule } from './fincadcliente-routing.module';

import { FincadclientePage } from './fincadcliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FincadclientePageRoutingModule
  ],
  declarations: [FincadclientePage]
})
export class FincadclientePageModule {}

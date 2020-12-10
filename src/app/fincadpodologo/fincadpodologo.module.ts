import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FincadpodologoPageRoutingModule } from './fincadpodologo-routing.module';

import { FincadpodologoPage } from './fincadpodologo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FincadpodologoPageRoutingModule
  ],
  declarations: [FincadpodologoPage]
})
export class FincadpodologoPageModule {}

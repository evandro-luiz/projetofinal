import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcarconsultaPageRoutingModule } from './marcarconsulta-routing.module';

import { MarcarconsultaPage } from './marcarconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcarconsultaPageRoutingModule
  ],
  declarations: [MarcarconsultaPage]
})
export class MarcarconsultaPageModule {}

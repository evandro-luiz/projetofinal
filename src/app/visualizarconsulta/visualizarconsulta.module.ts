import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarconsultaPageRoutingModule } from './visualizarconsulta-routing.module';

import { VisualizarconsultaPage } from './visualizarconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarconsultaPageRoutingModule
  ],
  declarations: [VisualizarconsultaPage]
})
export class VisualizarconsultaPageModule {}

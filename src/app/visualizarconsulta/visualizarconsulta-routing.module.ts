import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarconsultaPage } from './visualizarconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarconsultaPageRoutingModule {}

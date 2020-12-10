import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarconsultaPage } from './atualizarconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarconsultaPageRoutingModule {}

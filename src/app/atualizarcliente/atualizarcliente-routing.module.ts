import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarclientePage } from './atualizarcliente.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarclientePageRoutingModule {}

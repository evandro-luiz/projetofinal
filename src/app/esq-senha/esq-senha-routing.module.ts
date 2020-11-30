import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqSenhaPage } from './esq-senha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqSenhaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FincadclientePage } from './fincadcliente.page';

const routes: Routes = [
  {
    path: '',
    component: FincadclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FincadclientePageRoutingModule {}

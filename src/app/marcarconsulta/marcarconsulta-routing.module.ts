import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcarconsultaPage } from './marcarconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: MarcarconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcarconsultaPageRoutingModule {}

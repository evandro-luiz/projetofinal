import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarpodologoPage } from './atualizarpodologo.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarpodologoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarpodologoPageRoutingModule {}

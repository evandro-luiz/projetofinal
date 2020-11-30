import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastropodologoPage } from './cadastropodologo.page';

const routes: Routes = [
  {
    path: '',
    component: CadastropodologoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastropodologoPageRoutingModule {}

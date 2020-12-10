import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FincadpodologoPage } from './fincadpodologo.page';

const routes: Routes = [
  {
    path: '',
    component: FincadpodologoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FincadpodologoPageRoutingModule {}

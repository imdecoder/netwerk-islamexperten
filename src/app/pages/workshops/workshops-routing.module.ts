import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkshopsPage } from './workshops.page';

const routes: Routes = [
  {
    path: '',
    component: WorkshopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopsPageRoutingModule {}

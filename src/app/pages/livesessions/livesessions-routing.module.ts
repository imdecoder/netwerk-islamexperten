import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivesessionsPage } from './livesessions.page';

const routes: Routes = [
  {
    path: '',
    component: LivesessionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivesessionsPageRoutingModule {}

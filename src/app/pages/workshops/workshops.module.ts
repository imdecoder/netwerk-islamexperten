import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkshopsPageRoutingModule } from './workshops-routing.module';

import { WorkshopsPage } from './workshops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkshopsPageRoutingModule
  ],
  declarations: [WorkshopsPage]
})
export class WorkshopsPageModule { }

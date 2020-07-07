import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivesessionsPageRoutingModule } from './livesessions-routing.module';

import { LivesessionsPage } from './livesessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivesessionsPageRoutingModule
  ],
  declarations: [LivesessionsPage]
})
export class LivesessionsPageModule {}

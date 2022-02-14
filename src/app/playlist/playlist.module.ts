import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';


@NgModule({
  declarations: [
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    MatListModule
  ]
})
export class PlaylistModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PlaylistEffects } from './playlist.effects';
import * as fromPlaylist from './playlist.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromPlaylist.playlistFeatureKey,
      fromPlaylist.playlistReducer
    ),
    EffectsModule.forFeature([PlaylistEffects]),
  ],
  declarations: [],
})
export class PlaylistStateModule {}

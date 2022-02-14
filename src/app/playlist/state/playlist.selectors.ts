import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlaylist from './playlist.reducer';

export const getPlaylistState = createFeatureSelector<fromPlaylist.State>(
  fromPlaylist.playlistFeatureKey
);

export const selectPlaylist = createSelector(
  getPlaylistState,
  (state) => state.playlist
);

export const selectError = createSelector(
  getPlaylistState,
  (state) => state.error
);

import { createAction, props } from '@ngrx/store';
import { FeaturedPlaylist } from '../playlist.model';

export const loadPlaylist = createAction('[Playlist] load playlist');

export const playlistSuccess = createAction(
  '[Playlist] playlist success',
  props<{ playlist: FeaturedPlaylist }>()
);

export const playlistError = createAction(
  '[Playlist] playlist error',
  props<{ message: string }>()
);

import { playlistSuccess, playlistError } from './playlist.actions';
import { on, createReducer, Action } from '@ngrx/store';
import { FeaturedPlaylist } from '../playlist.model';

export interface State {
  playlist: FeaturedPlaylist | null;
  error: string;
}

export const initialState: State = {
  playlist: null,
  error: '',
};

export const playlistReducer = createReducer(
  initialState,
  on(playlistSuccess, (state, action) => ({
    ...state,
    playlist: action.playlist,
  })),
  on(playlistError, (state, action) => ({
    ...state,
    error: action.message,
  }))
);

export const playlistFeatureKey = 'playlist';

export function reducer(state: State | undefined, action: Action) {
  return playlistReducer(state, action);
}

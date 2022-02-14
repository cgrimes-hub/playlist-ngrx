import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadPlaylist,
  playlistSuccess,
  playlistError
} from './playlist.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FeaturedPlaylist } from '../playlist.model';
import { PlaylistService } from '../playlist.service';

@Injectable()
export class PlaylistEffects {
  loadPlaylist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlaylist),
      switchMap((action) =>
        this.playlistService.getPlaylist().pipe(
          map((playlist: FeaturedPlaylist) => playlistSuccess({ playlist: playlist })),
          catchError((error) => of(playlistError(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private playlistService: PlaylistService) {}
}

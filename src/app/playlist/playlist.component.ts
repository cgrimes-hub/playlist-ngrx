import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FeaturedPlaylist } from './playlist.model';
import { PlaylistActions, selectPlaylist } from './state';
import * as fromPlaylist from './state'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist$: Observable<FeaturedPlaylist | null> | undefined;


  constructor(private store: Store<fromPlaylist.State>) {}

  ngOnInit(): void {
    this.getPlaylist();
    this.playlist$ = this.store.pipe(select(selectPlaylist));
  }


  getPlaylist(): void {
    this.store.dispatch(PlaylistActions.loadPlaylist());
  }
}

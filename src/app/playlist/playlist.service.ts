import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeaturedPlaylist } from './playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

 apiPlaylist = 'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json';

  getPlaylist(): Observable<FeaturedPlaylist> {
    return this.http.get<FeaturedPlaylist>(this.apiPlaylist);
  }
}

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PlaylistService } from './playlist.service';
import { FeaturedPlaylist } from './playlist.model';

describe('PlaylistService', () => {
  let service: PlaylistService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PlaylistService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<FeaturedPlaylist>', () => {
  const mockSuccessData: FeaturedPlaylist = {
    "featuredPlaylists": {
        "name":"Featured Playlists",
        "content":[
          {"id":"pl.2b0e6e332fdf4b7a91164da3162127b5",
          "kind":"playlist",
          "name":"New Music Daily",
          "url":"https://music.apple.com/us/playlist/new-music-daily/pl.2b0e6e332fdf4b7a91164da3162127b5?app=music\u0026at=1000l4QJ\u0026ct=330\u0026itscg=10000\u0026itsct=330",
          "curator_name":"Apple Music",
          "artwork":"https://is5-ssl.mzstatic.com/image/thumb/Features126/v4/71/fd/7a/71fd7ada-17e3-51a1-922c-f8828cba24fb/U0MtTVMtV1ctTk1ELU1hcnlKQmxpZ2VBREFNX0lEPTEwNTMxNjU4NTcucG5n.png/600x600SC.DN01.jpg?l=en-US"
        },
        {"id":"pl.f4d106fed2bd41149aaacabb233eb5eb",
        "kind":"playlist",
        "name":"Today’s Hits",
        "url":"https://music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb?app=music\u0026at=1000l4QJ\u0026ct=330\u0026itscg=10000\u0026itsct=330",
        "curator_name":"Apple Music Hits",
        "artwork":"https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/67/5e/1b/675e1b0b-7cb5-fd43-ec50-0c667ef19b7f/U0MtTVMtV1ctVG9kYXlzSGl0cy1FZHNoZWVyYW50YXlsb3Jzd2lmdC1BREFNX0lEPTEwMTA0MTc4MTYucG5n.png/600x600SC.DN01.jpg?l=en-US"
        }
      ]
    }
  }

  service.getPlaylist()
  .subscribe(
      response => {
        expect(response).toBe(mockSuccessData);
      }
  )

  const testRequest = httpMock.expectOne('https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json');
  expect(testRequest.request.method).toBe('GET');
  testRequest.flush(mockSuccessData, {status: 200 , statusText: 'OK'});
    })
});

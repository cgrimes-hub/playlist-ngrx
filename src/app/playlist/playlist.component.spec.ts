import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { PlaylistComponent } from './playlist.component';
import * as fromPlaylist from './state/playlist.reducer';
import { PlaylistActions } from './state';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;
  let mockStore: MockStore<fromPlaylist.State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistComponent ],
      providers: [ provideMockStore() ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadPlaylist action ', () => {
    spyOn(mockStore, 'dispatch').and.callFake(() => {})
    component.getPlaylist();
    expect(mockStore.dispatch).toHaveBeenCalledWith(PlaylistActions.loadPlaylist());
  });

});

import { albumsCache, mutations, state as initialState } from '@/store';
import { albumsResponse, albumResponse } from './data/albums';
import { clone } from '@/common/utils';

describe('SET_ALBUMS', () => {
  const state = clone(initialState);
  it('adds the albums to the state', () => {
    const albums = clone(albumsResponse.album);
    mutations.SET_ALBUMS(state, albums);
    expect(state).toEqual({ ...initialState, ...{ albums } });
  });
});

describe('SET_ALBUM', () => {
  const state = clone(initialState);
  it('adds the album details both to the state and the albums cache', () => {
    const album = clone(albumResponse.album[0]);
    mutations.SET_ALBUM(state, album);
    expect(state).toEqual({ ...initialState, ...{ album } });
    expect(clone(albumsCache)).toEqual({
      [album.idAlbum]: album
    });
  });
});

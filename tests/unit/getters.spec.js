import { getters, state as initialState } from '@/store';
import { albumsResponse } from './data/albums';
import { clone } from '@/common/utils';

describe('albumsSortedByYear', () => {
  const state = { ...clone(initialState), ...{ albums: albumsResponse.album } };
  it('sorts the albums by year', () => {
    const res = getters.albumsSortedByYear(state);
    expect(res[0].intYearReleased).toEqual('1967');
    expect(res[1].intYearReleased).toEqual('1971');
    expect(res[2].intYearReleased).toEqual('1977');
    expect(res[3].intYearReleased).toEqual('1987');
  });
});

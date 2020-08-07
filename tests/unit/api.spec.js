import { fetchAlbums, fetchAlbum } from '@/api/albums';
import * as module from '@/common/request';

const artist = '1';
const idAlbum = '1';
const originalRequest = module.request;
module.request = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  // Reset to original implementation before each test
  module.request.mockImplementation(originalRequest);
});

describe('fetchAlbums', () => {
  it('gets called with the correct parameters', async() => {
    await fetchAlbums(artist);
    expect(module.request).toBeCalledWith({
      url: 'searchalbum.php',
      params: {
        s: artist
      }
    });
  });
});

describe('fetchAlbum', () => {
  it('gets called with the correct parameters', async() => {
    await fetchAlbum(idAlbum);
    expect(module.request).toBeCalledWith({
      url: 'album.php',
      params: {
        m: idAlbum
      }
    });
  });
});

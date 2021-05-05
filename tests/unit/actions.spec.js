import { albumsCache, actions, state as initialState } from '@/store'
import * as apiAlbums from '@/api/albums'
import { albumsResponse, albumResponse } from './data/albums'
import { clone } from '@/common/utils'

const artist = 'pink_floyd'
const idAlbum = '2109889'
const cachedIdAlbum = '1'
const originalFetchAlbums = apiAlbums.fetchAlbums
const originalFetchAlbum = apiAlbums.fetchAlbum
// eslint-disable-next-line no-import-assign
apiAlbums.fetchAlbums = jest.fn()
// eslint-disable-next-line no-import-assign
apiAlbums.fetchAlbum = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
  // Reset to original implementation before each test
  apiAlbums.fetchAlbums.mockImplementation(originalFetchAlbums)
  apiAlbums.fetchAlbum.mockImplementation(originalFetchAlbum)
})

describe('fetchAlbums', () => {
  it('fetches the albums data and commits the mutation', async () => {
    const state = clone(initialState)
    const commit = jest.fn()
    apiAlbums.fetchAlbums.mockImplementation(() => Promise.resolve(albumsResponse))
    await actions.fetchAlbums({ commit, state }, artist)
    expect(apiAlbums.fetchAlbums).toHaveBeenCalledWith(artist)
    expect(commit).toHaveBeenCalledWith('SET_ALBUMS', albumsResponse.album)
  })

  it('does not do anything when albums are already populated', async () => {
    const state = { ...clone(initialState), ...{ albums: [{ idAlbum }] } }
    const commit = jest.fn()
    apiAlbums.fetchAlbums.mockImplementation(() => Promise.resolve(albumsResponse))
    const res = await actions.fetchAlbums({ commit, state }, artist)
    expect(apiAlbums.fetchAlbums).toHaveBeenCalledTimes(0)
    expect(commit).toHaveBeenCalledTimes(0)
    expect(res).toBe(undefined)
  })
})

describe('fetchAlbum', () => {
  it('fetches the album details data and commits the mutation', async () => {
    const state = clone(initialState)
    const commit = jest.fn()
    apiAlbums.fetchAlbum.mockImplementation(() => Promise.resolve(albumResponse))
    await actions.fetchAlbum({ commit, state }, idAlbum)
    expect(apiAlbums.fetchAlbum).toHaveBeenCalledWith(idAlbum)
    expect(commit).toHaveBeenCalledWith('SET_ALBUM', albumResponse.album[0])
  })

  it('commits the album details from the cache when the album exists in cache', async () => {
    const state = clone(initialState)
    albumsCache[cachedIdAlbum] = {
      idAlbum: cachedIdAlbum
    }
    const commit = jest.fn()
    apiAlbums.fetchAlbum.mockImplementation(() => Promise.resolve(albumResponse))
    await actions.fetchAlbum({ commit, state }, cachedIdAlbum)
    expect(apiAlbums.fetchAlbum).toHaveBeenCalledTimes(0)
    expect(commit).toHaveBeenCalledWith('SET_ALBUM', albumsCache['1'])
  })
})

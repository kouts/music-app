import { request } from '@/common/request'

export const fetchAlbums = (artistId) => {
  return request({
    url: 'album.php',
    params: {
      i: artistId
    }
  })
}

export const fetchAlbum = (id) => {
  return request({
    url: 'album.php',
    params: {
      m: id
    }
  })
}

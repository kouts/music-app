import { request } from '@/common/request'

export const fetchAlbums = (artist) => {
  return request({
    url: 'searchalbum.php',
    params: {
      s: artist
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

import { shallowMount } from '@vue/test-utils'
import AlbumDetails from '@/components/AlbumDetails.vue'
import { albumResponse } from './data/albums'

describe('AlbumDetails.vue', () => {
  const album = albumResponse.album[0]
  const wrapper = shallowMount(AlbumDetails, {
    propsData: {
      idAlbum: album.idAlbum,
      idArtist: album.idArtist,
      name: album.strAlbum,
      artist: album.strArtist,
      year: album.intYearReleased,
      description: album.strDescriptionEN,
      musicStyle: album.strStyle,
      musicGenre: album.strGenre,
      thumbnailUrl: album.strAlbumThumb
    }
  })
  it('renders correctly when props are passed', () => {
    const div = wrapper.find('div.album-details')
    expect(div.exists()).toBe(true)
  })

  it('renders a message when no description is passed', async () => {
    wrapper.setProps({ description: '' })
    await wrapper.vm.$nextTick()
    const description = wrapper.find('.text')
    const msg = wrapper.find('.text-gray')
    expect(description.exists()).toBe(false)
    expect(msg.text()).toBe('No description available.')
  })
})

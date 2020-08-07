import { shallowMount } from '@vue/test-utils';
import AlbumCard from '@/components/AlbumCard.vue';
import { albumsResponse } from './data/albums';

describe('AlbumCard.vue', () => {
  const album = albumsResponse.album[0];
  const wrapper = shallowMount(AlbumCard, {
    propsData: {
      idAlbum: album.idAlbum,
      idArtist: album.idArtist,
      name: album.strAlbum,
      artist: album.strArtist,
      year: album.intYearReleased,
      thumbnailUrl: album.strAlbumThumb
    }
  });
  it('renders correctly when props are passed', () => {
    const card = wrapper.find('div.album-card');
    expect(card.exists()).toBe(true);
  });

  it('emits a clicked event with idAlbum as payload', async() => {
    await wrapper.trigger('click');
    expect(wrapper.emitted('clicked')).toBeTruthy();
    expect(wrapper.emitted('clicked')[0]).toEqual([album.idAlbum]);
  });
});

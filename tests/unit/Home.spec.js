import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home.vue'
import { albumsResponse } from './data/albums'

const localVue = createLocalVue()
localVue.use(Vuex)

const createStore = (albums) => {
  const options = {
    getters: {
      albumsSortedByYear: () => albums
    },
    actions: {
      fetchAlbums: jest.fn()
    }
  }
  return new Vuex.Store(options)
}

describe('Home.vue', () => {
  it('correctly renders a list of album cards', () => {
    const store = createStore(albumsResponse.album)
    const wrapper = mount(Home, { store, localVue })
    const cards = wrapper.findAll('.album-card')
    expect(cards.length).toBe(albumsResponse.album.length)
  })

  it('displays a message when no albums exist in the store', () => {
    const store = createStore([])
    const wrapper = mount(Home, { store, localVue })
    const cards = wrapper.findAll('.album-card')
    expect(cards.length).toBe(0)
    expect(wrapper.find('div.col.text-align-center').text()).toBe('No albums found')
  })

  it('displays 6 dummy cards while loading', async () => {
    const store = createStore([])
    const wrapper = mount(Home, { store, localVue })
    wrapper.setData({
      loading: true
    })
    await wrapper.vm.$nextTick(() => {
      const cards = wrapper.findAll('.album-card')
      const dummyCards = wrapper.findAll('.dummy-mini-card')
      expect(cards.length).toBe(0)
      expect(dummyCards.length).toBe(6)
    })
  })
})

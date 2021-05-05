import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Album from '@/views/Album.vue'
import { albumResponse } from './data/albums'

const localVue = createLocalVue()
localVue.use(Vuex)

const createStore = (album) => {
  const options = {
    state: {
      album
    },
    actions: {
      fetchAlbum: jest.fn()
    }
  }
  return new Vuex.Store(options)
}

const createWrapper = (store) => {
  return mount(Album, {
    store,
    localVue,
    stubs: ['router-link'],
    mocks: {
      $route
    }
  })
}

const $route = {
  params: {
    id: '1'
  }
}

describe('Album.vue', () => {
  it('correctly renders the album details section', () => {
    const store = createStore(albumResponse.album[0])
    const wrapper = createWrapper(store)
    const albumDetails = wrapper.find('.album-details')
    expect(albumDetails.exists()).toBe(true)
  })

  it('displays a message when no album exists with a certain id', () => {
    const store = createStore([])
    const wrapper = createWrapper(store)
    const albumDetails = wrapper.find('.album-details')
    expect(albumDetails.exists()).toBe(false)
    expect(wrapper.find('div.dummy-album-details').text()).toBe('Album not found')
  })

  it('displays a message while loading', async () => {
    const store = createStore([])
    const wrapper = createWrapper(store)
    wrapper.setData({
      loading: true
    })
    await wrapper.vm.$nextTick(() => {
      const albumDetails = wrapper.find('.album-details')
      expect(albumDetails.exists()).toBe(false)
      expect(wrapper.find('div.dummy-album-details').text()).toBe('Loading album details...')
    })
  })
})

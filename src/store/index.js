import Vue from 'vue';
import Vuex from 'vuex';
import { fetchAlbums, fetchAlbum } from '@/api/albums';
import { clone, compareAlbumsYear } from '@/common/utils';

Vue.use(Vuex);

export const albumsCache = {
  add: function(album) {
    this[album.idAlbum] = clone(album);
  }
};

export const state = {
  albums: [],
  album: {}
};

export const actions = {
  async fetchAlbums({ commit, state }, artist) {
    if (state.albums.length) {
      return;
    }
    try {
      const res = await fetchAlbums(artist);
      if (res.album) {
        commit('SET_ALBUMS', res.album);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async fetchAlbum({ commit }, id) {
    if (albumsCache[id]) {
      commit('SET_ALBUM', albumsCache[id]);
    } else {
      try {
        const res = await fetchAlbum(id);
        if (res.album) {
          commit('SET_ALBUM', res.album[0]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};

export const mutations = {
  SET_ALBUMS: (state, albums) => {
    state.albums = albums;
  },
  SET_ALBUM: (state, album) => {
    state.album = album;
    albumsCache.add(album);
  }
};

export const getters = {
  albumsSortedByYear: state => clone(state.albums).sort(compareAlbumsYear)
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});

import { Module } from 'vuex'
import { RootState, PageState } from '@/store'

interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

const pageModule: Module<PageState, RootState> = {
  namespaced: true,
  state: {
    currentPageMovieList: {} as Movie,
  },
  mutations: {
    assignState(
      state: PageState,
      payload: { key: keyof PageState; value: any },
    ) {
      const { key, value } = payload
      state[key] = value
    },
  },

  actions: {
    setCurrentPageMovies({ commit }, payload) {
      const { currentPageMovieList } = payload
      commit('assignState', {
        key: 'currentPageMovieList',
        value: currentPageMovieList ? currentPageMovieList : [],
      })
    },
  },
}

export default pageModule

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
    currentPage: 1,
    currentPageMovies: {} as Movie,
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
  getters: {
    currentPageNumber(state) {
      return state.currentPage
    },

    currentPageMovies(state) {
      return state.currentPageMovies
    },
  },
  actions: {
    setCurrentPageNumber({ commit }, payload: number) {
      if (payload < 1) return
      commit('assignState', {
        key: 'currentPage',
        value: payload,
      })
    },

    addCurrentPageNumber({ commit, state, rootState }, payload: number) {
      const totalPage = rootState.searchModule.totalPage
      if (
        state.currentPage + payload < 1 ||
        state.currentPage + payload > Number(totalPage)
      )
        return
      commit('assignState', {
        key: 'currentPage',
        value: state.currentPage + payload,
      })
    },

    setCurrentPageMovies({ commit, state, rootState }, payload) {
      const searchResult = rootState.searchModule.searchResult
      const currentPage = searchResult[state.currentPage - 1]
      commit('assignState', {
        key: 'currentPageMovies',
        value: currentPage ? currentPage : [],
      })
    },
  },
}

export default pageModule

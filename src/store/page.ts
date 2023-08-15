import { Module } from 'vuex'
import { RootState, PageState, Movie } from '@/store'

const pageModule: Module<PageState, RootState> = {
  namespaced: true,
  state: {
    currentPageMovieList: {} as Movie,
    currentPageNumber: 1,
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
    addCurrentPageNumber({ commit, state, rootState }, payload) {
      const totalPage = rootState.searchModule.totalPage
      if (
        state.currentPageNumber + payload > 1 &&
        state.currentPageNumber + payload < Number(totalPage)
      ) {
        commit('assignState', {
          key: 'currentPageNumber',
          value: state.currentPageNumber + payload,
        })
      }
    },

    setCurrentPageNumber({ commit, rootState }, payload: number) {
      const totalPage = rootState.searchModule.totalPage
      if (payload > 0 && payload < Number(totalPage)) {
        commit('assignState', {
          key: 'currentPageNumber',
          value: payload,
        })
      }
    },

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

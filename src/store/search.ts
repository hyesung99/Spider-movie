import { Module } from 'vuex'
import { MediaTypes } from '@/cosntants'
import { fetchMovieData } from '@/apis/movieSearchApi'
import { RootState, SearchState } from '@/store'

const searchModule: Module<SearchState, RootState> = {
  namespaced: true,
  state: {
    searchResult: [],
    searchRecommendation: [],
    searchTitle: '',
    searchYear: '',
    searchPage: '1',
    searchQuery: '',
    totalPage: '1',
    searchMediaType: MediaTypes.MOVIE,
    searchNew: false,
  },
  mutations: {
    assignState(
      state: SearchState,
      payload: { key: keyof SearchState; value: any },
    ) {
      const { key, value } = payload
      state[key] = value
    },
    updateQuery(state: SearchState) {
      const { searchTitle, searchYear, searchMediaType } = state
      const typeQuery =
        searchMediaType && searchMediaType !== MediaTypes.ALL
          ? `&type=${searchMediaType}`
          : ''

      const yearQuery = searchYear ? `&y=${searchYear}` : ''
      const titleQuery = searchTitle ? `&s=${searchTitle}` : ''
      const pageQuery = `&page=${state.searchPage}`
      state.searchQuery = `${titleQuery}${yearQuery}${typeQuery}${pageQuery}`
    },
  },
  actions: {
    async searchFirstPageMovies({ commit, dispatch, state }) {
      commit('assignState', {
        key: 'searchNew',
        value: true,
      })
      dispatch('setSearchOptions', { key: 'searchPage', value: 1 })
      const searchResult = await fetchMovieData(state.searchQuery)
      commit('assignState', {
        key: 'searchResult',
        value: [searchResult.Search],
      })
      commit('assignState', {
        key: 'searchRecommendation',
        value: searchResult.Search,
      })
      commit('assignState', {
        key: 'totalPage',
        value: Math.ceil(Number(searchResult.totalResults) / 10),
      })
    },

    async searchAllMovies({ commit, dispatch, state }) {
      const { totalPage } = state
      const allMovies = state.searchResult
      commit('assignState', {
        key: 'searchNew',
        value: false,
      })
      for (let i = 2; i <= Number(totalPage); i++) {
        if (state.searchNew) break
        dispatch('setSearchOptions', { key: 'searchPage', value: i })
        const searchResult = await fetchMovieData(state.searchQuery)
        allMovies.push(searchResult.Search)
        commit('assignState', { key: 'searchResult', value: allMovies })
      }
    },

    setSearchOptions({ commit }, payload) {
      const { key, value } = payload
      commit('assignState', { key, value })
      commit('updateQuery')
    },
    clearSearchResults({ commit }) {
      commit('assignState', { key: 'searchResult', value: [] })
      commit('assignState', { key: 'searchRecommendation', value: [] })
    },
  },
}

export default searchModule

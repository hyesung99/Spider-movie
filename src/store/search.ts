import { Module } from 'vuex'
import { MediaTypes, SearchOptions } from '@/cosntants'
import { RootState } from '@/store'
import { fetchMovieData } from '@/apis/movieSearchApi'

interface SearchResult {
  Search: Movie[]
  totalResults: string
  Response: string
}

interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface SearchState {
  searchResult: SearchResult
  searchQuery: string
  searchTitle: string
  searchYear: string
  searchPage: string
  searchMediaType: (typeof MediaTypes)[keyof typeof MediaTypes]
}

const searchModule: Module<SearchState, RootState> = {
  namespaced: true,
  state: {
    searchResult: {} as SearchResult,
    searchTitle: '',
    searchYear: '',
    searchQuery: '',
    searchPage: '1',
    searchMediaType: MediaTypes.MOVIE
  },
  mutations: {
    assignState(
      state: SearchState,
      payload: { key: keyof SearchState; value: any }
    ) {
      const { key, value } = payload
      console.log(value)
      state[key] = value
    },
    updateQuery(state: SearchState) {
      const { searchTitle, searchYear, searchMediaType } = state
      console.log(searchMediaType)
      const typeQuery =
        searchMediaType && searchMediaType !== MediaTypes.ALL
          ? `&type=${searchMediaType}`
          : ''

      const yearQuery = searchYear ? `&y=${searchYear}` : ''
      const titleQuery = searchTitle ? `&s=${searchTitle}` : ''
      const pageQuery = `&page=${state.searchPage}`
      state.searchQuery = `${titleQuery}${yearQuery}${typeQuery}${pageQuery}`
    }
  },
  actions: {
    async searchMovie({ commit, state }) {
      const searchResult = await fetchMovieData(state.searchQuery)
      commit('assignState', { key: 'searchResult', value: searchResult })
    },
    changeSearchOptions({ commit, dispatch }, payload) {
      const { key, value } = payload
      commit('assignState', { key, value })
      commit('updateQuery')
      dispatch('searchMovie')
    }
  }
}

export default searchModule

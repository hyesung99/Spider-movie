import { Module } from 'vuex'
import { MediaTypes, SearchOptions } from '@/cosntants'
import { RootState } from '@/store'
import { fetchMovieData } from '@/apis/movieSearchApi'

interface Movie {
  Search: Search
  totalResults: string
  Response: string
}

interface Search {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

interface searchState {
  searchResult: Movie[]
  searchQuery: string
  searchTitle: string
  searchYear: string
  searchPage: string
  searchMediaType: (typeof MediaTypes)[keyof typeof MediaTypes]
}

const searchModule: Module<searchState, RootState> = {
  namespaced: true,
  state: {
    searchResult: [],
    searchTitle: '',
    searchYear: '',
    searchQuery: '',
    searchPage: '1',
    searchMediaType: MediaTypes.MOVIE
  },
  mutations: {
    assignState(
      state: searchState,
      payload: { key: keyof searchState; value: any }
    ) {
      const { key, value } = payload
      console.log(value)
      state[key] = value
    },
    updateQuery(state: searchState) {
      const { searchTitle, searchYear, searchMediaType } = state
      const typeQuery = searchMediaType !== '' ? `&type=${searchMediaType}` : ''
      const yearQuery = searchYear !== '' ? `&y=${searchYear}` : ''
      const titleQuery = searchTitle !== '' ? `&s=${searchTitle}` : ''
      state.searchQuery = `${titleQuery}${yearQuery}${typeQuery}`
    }
  },
  actions: {
    changeSearchOptions({ commit }, payload) {
      const { key, value } = payload
      commit('assignState', { key, value })
      commit('updateQuery')
    },

    async searchMovie({ commit, state }) {
      console.log(state.searchQuery)
      const searchResult = await fetchMovieData(state.searchQuery)
      console.log(searchResult)
      commit('assignState', { key: 'searchResult', value: searchResult })
    }
  }
}

export default searchModule

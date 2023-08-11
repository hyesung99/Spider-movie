import { Module } from 'vuex'
import { MediaTypes, SearchOptions } from '@/cosntants'
import { RootState } from '@/store'

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
  searchMediaType: (typeof MediaTypes)[keyof typeof MediaTypes]
  searchOption: (typeof SearchOptions)[keyof typeof SearchOptions]
}

const searchModule: Module<searchState, RootState> = {
  namespaced: true,
  state: {
    searchResult: [],
    searchQuery: '',
    searchMediaType: MediaTypes.MOVIE,
    searchOption: SearchOptions.TITLE
  },
  mutations: {
    assignState(
      state: searchState,
      payload: { key: keyof searchState; value: any }
    ) {
      const { key, value } = payload
      state[key] = value
    }
  },
  actions: {
    changeSearchMediatype({ commit }, payload: string) {
      commit('assignState', { key: 'searchMediaType', value: payload })
    }
  }
}

export default searchModule

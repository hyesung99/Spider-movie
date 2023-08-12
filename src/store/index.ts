import { createStore } from 'vuex'
import searchModule from './search.ts'
import pageModule from './page.ts'
import { MediaTypes, SearchOptions } from '@/cosntants'

export interface RootState {
  searchModule: SearchState
  pageModule: PageState
}

export interface SearchState {
  searchResult: SearchResult[]
  searchQuery: string
  searchTitle: string
  searchYear: string
  searchPage: string
  totalPage: string
  searchMediaType: (typeof MediaTypes)[keyof typeof MediaTypes]
}

export interface PageState {
  currentPage: number
  cuurentpageMovies: Movie
}

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

export default createStore<RootState>({
  modules: { searchModule, pageModule },
})

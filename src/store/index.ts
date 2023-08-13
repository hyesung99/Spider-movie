import { createStore } from 'vuex'
import { MediaTypes } from '@/cosntants'
import searchModule from './search.ts'
import pageModule from './page.ts'
import detailModule from './detail.ts'

export interface RootState {
  searchModule: SearchState
  pageModule: PageState
}

export interface SearchState {
  searchResult: SearchResult[]
  searchRecommendation: Movie[]
  searchQuery: string
  searchTitle: string
  searchYear: string
  searchPage: string
  totalPage: string
  searchMediaType: (typeof MediaTypes)[keyof typeof MediaTypes]
  searchNew: Boolean
}

export interface PageState {
  currentPage: number
  currentPageMovies: Movie
}

export interface DetailState {
  movieDetail: MovieDetail
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

export interface MovieDetail {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export default createStore<RootState>({
  modules: { searchModule, pageModule, detailModule },
})

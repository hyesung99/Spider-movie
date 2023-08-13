import { Module } from 'vuex'
import { RootState, DetailState, MovieDetail } from '@/store'
import { fetchMovieDetail } from '@/apis/movieSearchApi'

const detailModule: Module<DetailState, RootState> = {
  namespaced: true,
  state: {
    movieDetail: {} as MovieDetail,
  },
  mutations: {
    assignState(
      state: DetailState,
      payload: { key: keyof DetailState; value: any },
    ) {
      const { key, value } = payload
      state[key] = value
    },
  },
  actions: {
    async getMovieDetail({ commit }, payload: string) {
      const movieDetail = await fetchMovieDetail(payload)
      commit('assignState', {
        key: 'movieDetail',
        value: movieDetail,
      })
    },
  },
}

export default detailModule

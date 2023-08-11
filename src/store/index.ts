import { createStore } from 'vuex'
import searchModule from './search.js'

export interface RootState {}

export default createStore<RootState>({
  modules: { searchModule }
})

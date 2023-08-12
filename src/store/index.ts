import { createStore } from 'vuex'
import searchModule from './search.js'

// 결과를 보여줄지 말지
//

export interface RootState {}

export default createStore<RootState>({
  modules: { searchModule },
})
